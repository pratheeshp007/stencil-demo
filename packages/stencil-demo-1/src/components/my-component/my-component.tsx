import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component-one',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponentOne {
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

  render() {
    return <div>testing async loading<my-child-component-one first={this.first} middle={this.middle} last={this.last} /></div>;
  }
}
