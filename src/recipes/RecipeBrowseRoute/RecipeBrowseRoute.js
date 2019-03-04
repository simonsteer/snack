import React, { Component, Fragment } from 'react'
import './RecipeBrowseRoute.css'
import RecipePreview from '../RecipePreview/RecipePreview'
import Rule from '../../interface/Rule'
import Text from '../../interface/Text'

const SECTIONS = [
  {
    renderMethod: 'renderMainCarousel',
    sectionClassName: 'main-carousel',
    title: null,
  },
  {
    renderMethod: 'renderTopPicks',
    sectionClassName: 'top-picks',
    title: 'Top Picks',
  },
  {
    renderMethod: 'renderSpotlightRecipe',
    sectionClassName: 'spotlight',
    title: 'Spotlight',
  },
  {
    renderMethod: 'renderLatestRecipes',
    sectionClassName: 'latest-recipes',
    title: 'Latest',
  },
]

export default class RecipeBrowseRoute extends Component {
  render() {
    return (
      <div className="recipes-recipebrowseroute">
        {SECTIONS.map(({ renderMethod, title, sectionClassName }) => (
          <section className={sectionClassName}>
            {this.renderSectionTitle(title)}
            {this[renderMethod]()}
          </section>
        ))}
      </div>
    )
  }

  renderMainCarousel = () => <RecipePreview />

  renderTopPicks = () => <RecipePreview size="sm" />

  renderSpotlightRecipe = () => <RecipePreview size="md" />

  renderLatestRecipes = () => <RecipePreview size="sm" />

  renderSectionTitle = title =>
    title ? (
      <Fragment>
        <Rule />
        <Text center element="p" size="sm" style={{ margin: '10px 0 30px 0' }}>
          {title}
        </Text>
      </Fragment>
    ) : null
}
