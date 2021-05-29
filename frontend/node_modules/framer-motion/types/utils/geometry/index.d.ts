import { BoundingBox2D, TransformPoint2D, AxisBox2D, Axis, BoxDelta } from "../../types/geometry";
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
export declare function convertBoundingBoxToAxisBox({ top, left, right, bottom, }: BoundingBox2D): AxisBox2D;
export declare function convertAxisBoxToBoundingBox({ x, y, }: AxisBox2D): BoundingBox2D;
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
export declare function transformBoundingBox({ top, left, bottom, right }: BoundingBox2D, transformPoint?: TransformPoint2D): BoundingBox2D;
/**
 * Calculate the center point of the provided axis
 */
export declare function calcAxisCenter({ min, max }: Axis): number;
/**
 * Create an empty axis box of zero size
 */
export declare function axisBox(): AxisBox2D;
export declare function copyAxisBox(box: AxisBox2D): AxisBox2D;
export declare function delta(): BoxDelta;
