import React, { Component } from 'react'
import './RecipePreview.css'
import Text from '../../interface/Text'
import Image from '../../interface/Image'
import Arrow from '../../interface/Arrow'

const IMAGE_STYLES = {
  sm: {
    width: '325px',
    height: '238px',
  },
  md: {
    width: '575px',
    height: '380px',
  },
  lg: {
    width: '850px',
    height: '565px',
  },
}

export default class RecipePreview extends Component {
  static defaultProps = {
    size: 'lg',
    recipe: {
      title: 'Creamy Macaroni and Cheese',
      author: 'Jennifer F',
      description:
        'My favourite homemade Creamy Mac and Cheese ever. Great cheese combines with a super creamy sauce, for an absolutely creamy, dreamy mac and cheese.',
      image: 'https://picsum.photos/1200/700',
    },
  }

  render() {
    return this.renderRecipePreview(this.props.size)
  }

  renderRecipePreview(size) {
    switch (size) {
      case 'lg':
        return this.renderLargePreview()
      case 'md':
        return this.renderMediumPreview()
      case 'sm':
        return this.renderSmallPreview()
      default:
        return this.renderLargePreview()
    }
  }

  renderLargePreview() {
    return (
      <div className="recipes-recipepreview">
        {this.renderTitle()}
        {this.renderImage()}
        {this.renderAuthor()}
        {this.renderDescription()}
        {!!this.props.hasArrow && (
          <Arrow style={{ position: 'absolute', top: 20, left: -40 }} />
        )}
      </div>
    )
  }

  renderMediumPreview() {
    return (
      <div className="recipes-recipepreview md">
        <div>{this.renderImage()}</div>
        <div>
          {this.renderTitle()}
          {this.renderAuthor()}
          {this.renderDescription()}
        </div>
      </div>
    )
  }

  renderSmallPreview() {
    return (
      <div className="recipes-recipepreview sm">
        {this.renderImage()}
        {this.renderTitle()}
        {this.renderAuthor()}
      </div>
    )
  }

  renderImage = () => (
    <Image
      source={this.props.recipe.image}
      style={IMAGE_STYLES[this.props.size]}
    />
  )

  renderTitle = () => (
    <Text
      size={this.props.size === 'sm' ? 'md' : 'lg'}
      element={this.props.size === 'sm' ? 'p' : 'h2'}
    >
      {this.props.recipe.title}
    </Text>
  )

  renderAuthor = () =>
    this.props.size === 'sm' ? (
      <Text>{`by ${this.props.recipe.author}`}</Text>
    ) : (
      <Text color="rgb(92,92,92)" block>
        by{' '}
        <Text inheritColor underline>
          {this.props.recipe.author}
        </Text>
      </Text>
    )

  renderDescription = () => (
    <Text color="rgb(92,92,92)" block>
      {this.props.recipe.description}
    </Text>
  )
}
