import { RefObject } from "react";
import { Point2D } from "../types/geometry";
/** @public */
export interface EventInfo {
    point: Point2D;
}
export declare type EventHandler = (event: MouseEvent | TouchEvent | PointerEvent, info: EventInfo) => void;
export declare type ListenerControls = [() => void, () => void];
export declare type TargetOrRef = EventTarget | RefObject<EventTarget>;
export declare type TargetBasedReturnType<Target> = Target extends EventTarget ? ListenerControls : undefined;
