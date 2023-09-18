var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import { useRef, useCallback, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from "./context.js";
/**
 * Gallery item
 *
 * Should be a children of Gallery component
 */
export const Item = _a => {
  var {
      children
    } = _a,
    restProps = __rest(_a, ["children"]);
  const getRef = useRef();
  const {
    remove,
    set,
    handleClick
  } = useContext(Context);
  const open = useCallback(e => handleClick(getRef, null, null, e), []);
  useEffect(() => {
    set(getRef, restProps);
    return () => {
      if (getRef.current) {
        remove(getRef);
      }
    };
  }, []);
  const ref = useCallback(node => {
    if (node) {
      if (getRef.current) {
        remove(getRef);
      }
      getRef.current = node;
      set(getRef, restProps);
    }
  }, Object.values(restProps));
  return children({
    ref,
    open
  });
};
Item.propTypes = {
  children: PropTypes.func.isRequired,
  original: PropTypes.string,
  originalSrcset: PropTypes.string,
  thumbnail: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  caption: PropTypes.string,
  content: PropTypes.element,
  html: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cropped: PropTypes.bool
};