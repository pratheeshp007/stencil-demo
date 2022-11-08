/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyChildComponentOne {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyComponentOne {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMyChildComponentOneElement extends Components.MyChildComponentOne, HTMLStencilElement {
    }
    var HTMLMyChildComponentOneElement: {
        prototype: HTMLMyChildComponentOneElement;
        new (): HTMLMyChildComponentOneElement;
    };
    interface HTMLMyComponentOneElement extends Components.MyComponentOne, HTMLStencilElement {
    }
    var HTMLMyComponentOneElement: {
        prototype: HTMLMyComponentOneElement;
        new (): HTMLMyComponentOneElement;
    };
    interface HTMLElementTagNameMap {
        "my-child-component-one": HTMLMyChildComponentOneElement;
        "my-component-one": HTMLMyComponentOneElement;
    }
}
declare namespace LocalJSX {
    interface MyChildComponentOne {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyComponentOne {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "my-child-component-one": MyChildComponentOne;
        "my-component-one": MyComponentOne;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-child-component-one": LocalJSX.MyChildComponentOne & JSXBase.HTMLAttributes<HTMLMyChildComponentOneElement>;
            "my-component-one": LocalJSX.MyComponentOne & JSXBase.HTMLAttributes<HTMLMyComponentOneElement>;
        }
    }
}
