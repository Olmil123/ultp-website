/**
 * Universal createElement helper
 * Works for ANY HTML tag + supports:
 * - class / className
 * - style (object or string)
 * - dataset (object) -> data-*
 * - attrs: any attributes (aria-*, data-*, id, src, href, etc.)
 * - events: onClick / onInput / onSubmit ... OR "on" object
 * - children: string | number | Node | array | nested arrays
 * - refs: { current: null } (optional)
 * - svg: auto-detect by tag name OR { svg: true }
 */

const SVG_TAGS = new Set([
  'svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon',
  'g', 'defs', 'linearGradient', 'radialGradient', 'stop', 'clipPath',
  'mask', 'pattern', 'text', 'tspan', 'use', 'symbol', 'ellipse',
]);

function isNode(v) {
  return v instanceof Node;
}

function flattenChildren(children) {
  const out = [];
  const walk = (c) => {
    if (c === null || c === undefined || c === false) return;
    if (Array.isArray(c)) return c.forEach(walk);
    out.push(c);
  };
  walk(children);
  return out;
}

function setStyle(el, style) {
  if (!style) return;
  if (typeof style === 'string') {
    el.style.cssText = style;
    return;
  }
  if (typeof style === 'object') {
    Object.entries(style).forEach(([k, v]) => {
      if (v === null || v === undefined) return;
      // allow CSS custom props: { '--my-var': '10px' }
      if (k.startsWith('--')) el.style.setProperty(k, String(v));
      else el.style[k] = String(v);
    });
  }
}

function setDataset(el, dataset) {
  if (!dataset || typeof dataset !== 'object') return;
  Object.entries(dataset).forEach(([k, v]) => {
    if (v === null || v === undefined) return;
    el.dataset[k] = String(v);
  });
}

function setAttributes(el, attrs = {}) {
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === null || value === undefined || value === false) return;

    //! class shortcuts (SVG elements have read-only className)
    if (key === 'class' || key === 'className') {
      const isSvg = el.namespaceURI === 'http://www.w3.org/2000/svg';
      if (isSvg) {
        el.setAttribute('class', String(value));
      } else {
        el.className = String(value);
      }
      return;
    }

    //* style
    if (key === 'style') {
      setStyle(el, value);
      return;
    }

    //* dataset
    if (key === 'dataset') {
      setDataset(el, value);
      return;
    }

    // ref support: { current: null }
    if (key === 'ref' && value && typeof value === 'object') {
      value.current = el;
      return;
    }

    //! events: onClick, onInput
    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.slice(2).toLowerCase();
      el.addEventListener(eventName, value);
      return;
    }

    //! events object: on: { click: fn, input: fn }
    if (key === 'on' && value && typeof value === 'object') {
      Object.entries(value).forEach(([eventName, handler]) => {
        if (typeof handler === 'function') {
          el.addEventListener(eventName, handler);
        }
      });
      return;
    }

    //* boolean attributes (e.g. disabled, checked, required)
    if (value === true) {
      el.setAttribute(key, '');
      return;
    }

    //! normal attribute
    el.setAttribute(key, String(value));
  });
}

function createDomElement(tag, attrs, children) {
  const wantsSvg = attrs?.svg === true || SVG_TAGS.has(tag);
  const el = wantsSvg
    ? document.createElementNS('http://www.w3.org/2000/svg', tag)
    : document.createElement(tag);

  //? don't keep svg flag as attribute
  if (attrs && 'svg' in attrs) {
    const { svg, ...rest } = attrs;
    setAttributes(el, rest);
  } else {
    setAttributes(el, attrs);
  }

  const flat = flattenChildren(children);

  flat.forEach((child) => {
    if (child === '' || child === 0 || child) {
      if (isNode(child)) {
        el.appendChild(child);
      } else {
        el.appendChild(document.createTextNode(String(child)));
      }
    }
  });

  return el;
}

/**
 * el('div', { class: 'box', onClick: fn }, [
 *   el('h2', {}, 'Title'),
 *   'text',
 * ])
 */
export function el(tag, attrs = {}, children = []) {
  return createDomElement(tag, attrs, children);
}

/**
 * html`<div class="x">Hello</div>`
 * Minimal template helper (no security sanitization).
 * Use ONLY for static trusted strings.
 */
export function html(strings, ...values) {
  const tpl = document.createElement('template');
  const result = strings.reduce((acc, s, i) => acc + s + (values[i] ?? ''), '');
  tpl.innerHTML = result.trim();
  return tpl.content.firstElementChild;
}
