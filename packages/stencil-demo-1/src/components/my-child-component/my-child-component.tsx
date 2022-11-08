import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-child-component-one',
  styleUrl: 'my-child-component.css',
  shadow: true,
})
export class MyChildComponentOne {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  async componentWillRender() {
    return new Promise((resolve) => setTimeout(()=> resolve('done'), 5000)); 
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
