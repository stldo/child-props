# child-props

Easily set props of child components.

## Usage

### assign

```js
import { assign } from 'child-props'

const Container = props => <div {...props}/>
const Title = props => <h1 {...props}/>
const Content = props => <p {...props}/>

const CustomContainer = ({ childProps, ...props }) => {
  const {
    Content: contentProps,
    Title: titleProps
  } = assign(childProps, {
    Title: props => ({ /* Access props set on component */
      className: `container__title ${props.className}`,
      id: 'title'
    }),
    Content: {
      id: 'content'
    }
  })

  return (
    <Container {...props}>
      <Title {...titleProps}>
        Title
      </Title>
      <Content {...contentProps}>
        Lorem ipsum
      </Content>
    </Container>
  )
}

export default () => (
  <CustomContainer className='custom__container' childProps={{
    Title: { className: 'custom__title' },
    Content: { className: 'custom__content', id: 'custom' }
  }}/>
)

{/* The export above is the same as the following:
  <Container className='custom__container'>
    <Title className='container__title custom__title' id='title'>
      Title
    </Title>
    <Content className='custom__content' id='custom'>
      Lorem ipsum
    </Content>
  </Container>
*/}
```

### get

```js
import { get } from 'child-props'

const Container = props => <div {...props}/>
const Title = props => <h1 {...props}/>
const Content = props => <p {...props}/>

const CustomContainer = ({ childProps, ...props }) => (
  <Container {...props}>
    <Title {...get(childProps, 'Title')}>
      Title
    </Title>
    <Content {...get(childProps, 'Content', { id: 'content' })}>
      Lorem ipsum
    </Content>
  </Container>
)

export default () => (
  <CustomContainer className='custom__container' childProps={{
    Title: { className: 'custom__title' },
    Content: { className: 'custom__content', id: 'custom' }
  }}/>
)

{/* The export above is the same as the following:
  <Container className='custom__container'>
    <Title className='container__title custom__title'>
      Title
    </Title>
    <Content className='custom__content' id='custom'>
      Lorem ipsum
    </Content>
  </Container>
*/}
```

## Helpers

### extend

```js
import { extend } from 'child-props'

const Container = props => <div {...props}/>
const Title = props => <h1 {...props}/>
const Content = props => <p {...props}/>

const CustomContainer = ({ childProps, ...props }) => {
  childProps = extend(childProps)

  const {
    Title: titleProps
  } = childProps.assign({
    Title: props => ({ /* Access props set on component */
      className: `container__title ${props.className}`,
      id: 'title'
    })
  })

  return (
    <Container {...props}>
      <Title {...titleProps}>
        Title
      </Title>
      <Content {...childProps.get('Content', { id: 'content' })}>
        Lorem ipsum
      </Content>
    </Container>
  )
}

export default () => (
  <CustomContainer className='custom__container' childProps={{
    Title: { className: 'custom__title' },
    Content: { className: 'custom__content', id: 'custom' }
  }}/>
)

{/* The export above is the same as the following:
  <Container className='custom__container'>
    <Title className='container__title custom__title' id='title'>
      Title
    </Title>
    <Content className='custom__content' id='custom'>
      Lorem ipsum
    </Content>
  </Container>
*/}
```

### HOC

```js
import childProps from 'child-props'

const Container = props => <div {...props}/>
const Title = props => <h1 {...props}/>
const Content = props => <p {...props}/>

const CustomContainer = childProps(({ childProps, ...props }) => {
  const {
    Title: titleProps
  } = childProps.assign({
    Title: props => ({ /* Access props set on component */
      className: `container__title ${props.className}`,
      id: 'title'
    })
  })

  return (
    <Container {...props}>
      <Title {...titleProps}>
        Title
      </Title>
      <Content {...childProps.get('Content', { id: 'content' })}>
        Lorem ipsum
      </Content>
    </Container>
  )
})

export default () => (
  <CustomContainer className='custom__container' childProps={{
    Title: { className: 'custom__title' },
    Content: { className: 'custom__content', id: 'custom' }
  }}/>
)

{/* The export above is the same as the following:
  <Container className='custom__container'>
    <Title className='container__title custom__title' id='title'>
      Title
    </Title>
    <Content className='custom__content' id='custom'>
      Lorem ipsum
    </Content>
  </Container>
*/}
```
