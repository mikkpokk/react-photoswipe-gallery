import { FC, MouseEvent } from 'react'
interface ChildrenFnProps {
  /**
   * Required `ref` object to any html node of item
   *
   * Can be omitted if there is only one item in gallery
   */
  ref: (node: HTMLElement) => void
  /**
   * Function that opens the gallery at the current item's index
   */
  open: (e: MouseEvent) => void
}
export interface ItemProps {
  /**
   * Render prop for exposing Gallery API
   */
  children: (props: ChildrenFnProps) => JSX.Element
  /**
   * Url of original image
   */
  original?: string
  /**
   * Srcset of original image
   */
  originalSrcset?: string
  /**
   * Url of thumbnail
   */
  thumbnail?: string
  /**
   * Width of original image
   */
  width?: string | number
  /**
   * Height of original image
   */
  height?: string | number
  /**
   * Alternate text for original image
   */
  alt?: string
  /**
   * Text for caption
   */
  caption?: string
  /**
   * Custom slide content
   */
  content?: JSX.Element
  /**
   * Custom slide content (raw html)
   *
   * TODO: deprecate, use `content` instead
   */
  html?: string
  /**
   * Item ID, for hash navigation
   */
  id?: string | number
  /**
   * Thumbnail is cropped
   */
  cropped?: boolean
}
/**
 * Gallery item
 *
 * Should be a children of Gallery component
 */
export declare const Item: FC<ItemProps>
export {}
