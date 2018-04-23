# Transition

The Transition component lets you describe a transition from one component state to another over time with a simple declarative API. Most commonly it's used to animate the mounting and unmounting of a component, but can also be used to describe in-place transition states as well.

By default the Transition component does not alter the behavior of the component it renders, it only tracks "enter" and "exit" states for the components. It's up to you to give meaning and effect to those states. For example we can add styles to a component when it enters or exits:


Transition组件允许用一个简单的声明性API描述从一个组件状态到另一个组件的转换。大多数情况下，它用于对组件的安装和卸载进行动画制作，但也可用于描述就地过渡状态。

```js
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);


```

As noted the Transition component doesn't do anything by itself to its child component. What it does do is track transition states over time so you can update the component (such as by adding styles or classes) when it changes states.

There are 4 main states a Transition can be in:

如上所述，Transition组件本身并不对其子组件做任何事情。它的功能是随着时间的推移跟踪转换状态，以便在更改状态时更新组件（例如通过添加样式或类）。

有一个转换可以在四个主要状态：

```
entering
entered
exiting
exited
```

Transition state is toggled via the in prop. When true the component begins the "Enter" stage. During this stage, the component will shift from its current transition state, to 'entering' for the duration of the transition and then to the 'entered' stage once it's complete. Let's take the following example:

转换状态通过in prop切换。当组件开始“进入”阶段时。在此阶段，组件将从当前的转换状态转换为转换期间的“进入”，并在转换完成后转入“进入”状态。我们来看下面的例子

```js

state= { in: false };

toggleEnterState = () => {
  this.setState({ in: true });
}

render() {
  return (
    <div>
      <Transition in={this.state.in} timeout={500} />
      <button onClick={this.toggleEnterState}>Click to Enter</button>
    </div>
  );
}
```
When the button is clicked the component will shift to the 'entering' state and stay there for 500ms (the value of timeout) before it finally switches to 'entered'.

When in is false the same thing happens except the state moves from 'exiting' to 'exited'.

点击按钮后，组件将切换到“进入”状态并在最终切换到“进入”状态之前停留在那里500毫秒（超时值）。

如果输入错误，除非状态从“退出”移动到“退出”，否则会发生同样的情况。

Note: For simpler transitions the Transition component might be enough, but take into account that it's platform-agnostic, while the CSSTransition component forces reflows in order to make more complex transitions more predictable. For example, even though classes example-enter and example-enter-active are applied immediately one after another, you can still transition from one to the other because of the forced reflow (read this issue for more info). Take this into account when choosing between Transition and CSSTransition.

注意：对于更简单的转换，转换组件可能已足够，但考虑到它是平台不可知的，而CSSTransition组件强制重排以便更加可预测更复杂的转换。例如，即使类example-enter和example-enter-active是一个接一个立即应用的，由于强制回流，您仍然可以从一个转换到另一个（有关更多信息，请阅读此问题）。在Transition和CSSTransition之间进行选择时考虑到这一点。


```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, Well } from 'react-bootstrap';
import { Transition } from 'react-transition-group';

class Example extends React.Component {
  state = {
    show: false,
    entered: false,
  };

  render() {
    const { show } = this.state;
    return (
      <Grid style={{ paddingTop: '2rem' }}>
        <Button
          onClick={() => {
            this.setState(state => ({
              show: !state.show,
            }));
          }}
        >
          Toggle
        </Button>
        <Well style={{ marginTop: '1rem' }}>
          <Transition
            in={show}
            timeout={1000}
            unmountOnExit
            mountOnEnter
          >
            {state => {
              switch (state) {
                case 'entering':
                  return 'Entering…';
                case 'entered':
                  return 'Entered!';
                case 'exiting':
                  return 'Exiting…';
                case 'exited':
                  return 'Exited!';
              }
            }}
          </Transition>
        </Well>
      </Grid>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);

```

Props

children
A function child can be used instead of a React element. This function is called with the current transition status ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used to apply context specific props to a component.

可以使用函数子代替React元素。这个函数用当前的转换状态（'进入'，'进入'，'退出'，'退出'，'卸载'）来调用，它可以用来将上下文特定的道具应用到组件。
```js
<Transition timeout={150}>
  {(status) => (
    <MyComponent className={`fade fade-${status}`} />
  )}
</Transition>
```
type: Function | element
required

- in
    Show the component; triggers the enter or exit states

    type: boolean
    default: false

- mountOnEnter
    By default the child component is mounted immediately along with the parent Transition component. If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter. After the first enter transition the component will stay mounted, even on "exited", unless you also specify unmountOnExit.

    默认情况下，子组件立即与父Transition组件一起安装。如果你想在组件的“{懒惰挂载”中设置第一个= {true}，你可以设置mountOnEnter。在第一次输入转换后，组件将保持挂起状态，即使在“已退出”状态下，除非您还指定了unmountOnExit。
    type: boolean
    default: false

- unmountOnExit
    By default the child component stays mounted after it reaches the 'exited' state. Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.

    默认情况下，子组件在达到“退出”状态后保持挂载状态。如果您希望在完成退出后卸载组件，请设置unmountOnExit。

    type: boolean
    default: false
- appear

    Normally a component is not transitioned if it is shown when the <Transition> component mounts. If you want to transition on the first mount set appear to true, and the component will transition in as soon as the <Transition> mounts.

    通常情况下，如果在<Transition>组件安装时显示组件，则组件不会进行转换。如果您想要在第一个安装集上进行转换显示为true，并且只要<Transition>挂载，组件将立即转换。

    Note: there are no specific "appear" states. appear only adds an additional enter transition.

    注意：没有特定的“出现”状态。出现只会增加一个额外的输入转换。

    type: boolean
    default: false

-    enter
    Enable or disable enter transitions.

    type: boolean
    default: true

-    exit
    Enable or disable exit transitions.

    type: boolean
    default: true

-    timeout
    The duration of the transition, in milliseconds. Required unless addEndListener is provided

    You may specify a single timeout for all transitions like: timeout={500}, or individually like:

    timeout={{
     enter: 300,
     exit: 500,
    }}
    type: number | { enter?: number, exit?: number }

-    addEndListener
    Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. Allows for more fine grained transition end logic. Note: Timeouts are still used as a fallback if provided.

    添加自定义转场结束触发器。调用转换DOM节点并完成回调。允许更细粒度的转换结束逻辑。注意：如果提供，超时仍被用作后备

    addEndListener={(node, done) => {
      // use the css transitionend event to mark the finish of a transition
      node.addEventListener('transitionend', done, false);
    }}
    type: Function

-    onEnter
    Callback fired before the "entering" status is applied. An extra parameter isAppearing is supplied to indicate if the enter stage is occurring on the initial mount

    type: Function(node: HtmlElement, isAppearing: bool) -> void
    default: function noop() {}

-    onEntering
    Callback fired after the "entering" status is applied. An extra parameter isAppearing is supplied to indicate if the enter stage is occurring on the initial mount

    type: Function(node: HtmlElement, isAppearing: bool)
    default: function noop() {}

-    onEntered
    Callback fired after the "entered" status is applied. An extra parameter isAppearing is supplied to indicate if the enter stage is occurring on the initial mount

    type: Function(node: HtmlElement, isAppearing: bool) -> void
    default: function noop() {}

-    onExit
    Callback fired before the "exiting" status is applied.

    type: Function(node: HtmlElement) -> void
    default: function noop() {}

-    onExiting
    Callback fired after the "exiting" status is applied.

    type: Function(node: HtmlElement) -> void
    default: function noop() {}

-    onExited
    Callback fired after the "exited" status is applied.

    type: Function(node: HtmlElement) -> void
    default: function noop() {}

# CSSTransition

  A Transition component using CSS transitions and animations. It's inspired by the excellent ng-animate library.

  CSSTransition applies a pair of class names during the appear, enter, and exit stages of the transition. The first class is applied and then a second "active" class in order to activate the css animation. After the animation, matching done class names are applied to persist the animation state.

  When the in prop is toggled to true the Component will get the example-enter CSS class and the example-enter-active CSS class added in the next tick. This is a convention based on the classNames prop.

  使用CSS过渡和动画的过渡组件。 它的灵感来自优秀的ng-animate图书馆。

  CSSTransition在转换的出现，进入和退出阶段应用一对类名。 第一类被应用，然后第二个“活跃”类来激活css动画。 在动画之后，匹配完成的类名将被用于保持动画状态。

  当prop被切换为true时，Component将获得示例 - 输入CSS类和在下一个tick中添加的example-enter-active CSS类。 这是一个基于classNames道具的约定。

  - Props

      Accepts all props from <Transition> unless otherwise noted.
      classNames
      The animation classNames applied to the component as it enters, exits or has finished the transition. A single name can be provided and it will be suffixed for each stage: e.g.

      classNames="fade" applies fade-enter, fade-enter-active, fade-enter-done, fade-exit, fade-exit-active, fade-exit-done, fade-appear, and fade-appear-active. Each individual classNames can also be specified independently like:

      classNames={{
       appear: 'my-appear',
       appearActive: 'my-active-appear',
       enter: 'my-enter',
       enterActive: 'my-active-enter',
       enterDone: 'my-done-enter,
       exit: 'my-exit',
       exitActive: 'my-active-exit',
       exitDone: 'my-done-exit,
      }}
      type: string | { appear?: string, appearActive?: string, enter?: string, enterActive?: string, enterDone?: string, exit?: string, exitActive?: string, exitDone?: string, }
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

class Example extends React.Component {
  state = {
    name: '',
    showValidationMessage: false,
    showValidationButton: false,
  };

  render() {
    const {
      name,
      showValidationMessage,
      showValidationButton,
    } = this.state;
    return (
      <Grid style={{ paddingTop: '2rem' }}>
        <form style={{ marginTop: '1rem' }}>
          <FormGroup
            validationState={
              showValidationMessage ? 'success' : null
            }
          >
            <ControlLabel>Your name</ControlLabel>
            <FormControl
              type="text"
              value={name}
              onFocus={() => {
                this.setState({
                  showValidationMessage: false,
                });
              }}
              onChange={event => {
                this.setState({
                  name: event.target.value,
                  showValidationButton: true,
                });
              }}
            />
            <CSSTransition
              in={showValidationMessage}
              timeout={300}
              classNames="message"
              unmountOnExit
              onExited={() => {
                this.setState({
                  showValidationButton: true,
                });
              }}
            >
              {state => (
                <HelpBlock>
                  Your name rocks!
                  <CSSTransition
                    in={state === 'entered'}
                    timeout={300}
                    classNames="star"
                    unmountOnExit
                  >
                    <div className="star">⭐</div>
                  </CSSTransition>
                </HelpBlock>
              )}
            </CSSTransition>
          </FormGroup>
        </form>
        {showValidationButton ? (
          <Button
            onClick={() => {
              this.setState(state => ({
                showValidationButton: false,
                showValidationMessage: true,
              }));
            }}
          >
            Validate form
          </Button>
        ) : null}
      </Grid>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
```
```css
.help-block {
  transform-origin: center left;
}

.message-enter {
  opacity: 0.01;
  transform: scale(0.9) translateY(50%);
}
.message-enter-active {
  opacity: 1;
  transform: scale(1) translateY(0%);
  transition: all 300ms ease-out;
}
.message-exit {
  opacity: 1;
  transform: scale(1) translateY(0%);
}
.message-exit-active {
  opacity: 0.01;
  transform: scale(0.9) translateY(50%);
  transition: all 300ms ease-out;
}

.star {
  display: inline-block;
  margin-left: 0.5rem;
  transform: scale(1.25);
}
.star-enter {
  opacity: 0.01;
  transform: translateY(-100%) scale(0.75);
}
.star-enter-active {
  opacity: 1;
  transform: translateY(0%) scale(1.25);
  transition: all 300ms ease-out;
}
.star-exit {
  opacity: 1;
  transform: scale(1.25);
}
.star-exit-active {
  opacity: 0;
  transform: scale(4);
  transition: all 300ms ease-in;
}
```


# TransitionGroup


 The <TransitionGroup> component manages a set of <Transition> components in a list. Like with the <Transition> component, <TransitionGroup>, is a state machine for managing the mounting and unmounting of components over time.

 Consider the example below using the Fade CSS transition from before. As items are removed or added to the TodoList the in prop is toggled automatically by the <TransitionGroup>. You can use any <Transition> component in a <TransitionGroup>, not just css.

 <TransitionGroup>组件管理一组列表中的<Transition>组件。 与<Transition>组件一样，<TransitionGroup>也是一个状态机，用于管理组件随着时间的推移和卸载。

 考虑下面的例子，使用之前的Fade CSS过渡。 当项目被移除或添加到TodoList时，prop通过<TransitionGroup>自动切换。 您可以使用<TransitionGroup>中的任何<Transition>组件，而不仅仅是css。

 Note that <TransitionGroup> does not define any animation behavior! Exactly how a list item animates is up to the individual <Transition> components. This means you can mix and match animations across different list items.

 请注意，<TransitionGroup>不定义任何动画行为！ 确切地说，一个列表项目如何动画取决于单个<Transition>组件。 这意味着您可以在不同列表项目之间混合使用动画。

 ```js
 import React from 'react';
 import ReactDOM from 'react-dom';
 import {
   Grid,
   ListGroup,
   ListGroupItem,
   Button,
 } from 'react-bootstrap';
 import {
   CSSTransition,
   TransitionGroup,
 } from 'react-transition-group';
 import uuid from 'uuid';

 import './styles.css';

 class TodoList extends React.Component {
   state = {
     items: [
       { id: uuid(), text: 'Buy eggs' },
       { id: uuid(), text: 'Pay bills' },
       { id: uuid(), text: 'Invite friends over' },
       { id: uuid(), text: 'Fix the TV' },
     ],
   };

   render() {
     const { items } = this.state;
     return (
       <Grid>
         <ListGroup>
           <TransitionGroup className="todo-list">
             {items.map(({ id, text }) => (
               <CSSTransition
                 key={id}
                 timeout={500}
                 classNames="fade"
               >
                 <ListGroupItem>
                   <Button
                     className="remove-btn"
                     type="button"
                     bsStyle="danger"
                     bsSize="xs"
                     onClick={() => {
                       this.setState(state => ({
                         items: state.items.filter(
                           item => item.id !== id
                         ),
                       }));
                     }}
                   >
                     &times;
                   </Button>
                   {text}
                 </ListGroupItem>
               </CSSTransition>
             ))}
           </TransitionGroup>
         </ListGroup>
         <Button
           type="button"
           onClick={() => {
             const text = prompt('Enter some text');
             if (text) {
               this.setState(state => ({
                 items: [
                   ...state.items,
                   { id: uuid(), text },
                 ],
               }));
             }
           }}
         >
           Add Item
         </Button>
       </Grid>
     );
   }
 }

 ReactDOM.render(
   <TodoList />,
   document.getElementById('root')
 );

 ```

 Props

-  component
     <TransitionGroup> renders a <div> by default. You can change this behavior by providing a component prop. If you use React v16+ and would like to avoid a wrapping <div> element you can pass in component={null}. This is useful if the wrapping div borks your css styles.

     默认情况下，<TransitionGroup>呈现<div>。 您可以通过提供组件prop来更改此行为。 如果您使用React v16 +并且想避免包装<div>元素，则可以传递component = {null}。 如果包装div borks你的css风格，这很有用。

     type: any
     default: 'div'

-  children

 A set of <Transition> components, that are toggled in and out as they leave. the <TransitionGroup> will inject specific transition props, so remember to spread them through if you are wrapping the <Transition> as with our <Fade> example.

 一组<Transition>组件，在它们离开时切换进入和切出。 <TransitionGroup>会注入特定的转换道具，所以如果你正在用我们的<Fade>例子来包装<Transition>，记住要传播它们。

 type: any


- appear
     A convenience prop that enables or disables appear animations for all children. Note that specifying this will override any defaults set on individual children Transitions.

     type: boolean
 enter
 A convenience prop that enables or disables enter animations for all children. Note that specifying this will override any defaults set on individual children Transitions.

 type: boolean

- exit
 A convenience prop that enables or disables exit animations for all children. Note that specifying this will override any defaults set on individual children Transitions.

 type: boolean

- childFactory
 You may need to apply reactive updates to a child as it is exiting. This is generally done by using cloneElement however in the case of an exiting child the element has already been removed and not accessible to the consumer.

 If you do need to update a child as it leaves you can provide a childFactory to wrap every child, even the ones that are leaving.

 您可能需要将响应式更新应用于正在退出的小孩。 这通常通过使用cloneElement来完成，但是在退出子元素的情况下，元素已经被移除并且不能被消费者访问。

 如果您确实需要在孩子离开时更新孩子，则可以提供一个childFactory来包装每个孩子，即使是那些正在离开的孩子。


 type: Function(child: ReactElement) -> ReactElement
 default: child => child
