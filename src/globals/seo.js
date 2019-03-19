import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Facebook from './facebook'
import Twitter from './twitter'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

export default class SEO extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		if ( nextProps.title === this.props.title ) {
			return false;
		}
		if ( nextProps.desc === this.props.desc ) {
			return false;
		}
		
		return true;
	}	
	

	render() {
		const { title, desc, banner, pathname, article, node } = this.props
		return (
			<StaticQuery
				query={query}
				render={({
					site: {
						buildTime,
						siteMetadata: {
							siteUrl,
							defaultTitle,
							defaultDescription,
							defaultBanner,
							siteLanguage,
							ogLanguage,
							author,
							twitter,
							facebook,
						},
					},
				}) => {
					const seo = {
						title: title ? `${title} | ${defaultTitle}` : defaultTitle,
						description: desc || defaultDescription,
						image: `${siteUrl}${banner || defaultBanner}`,
						url: `${siteUrl}${pathname || ''}`,
					}					

					return (
						<>
							<Helmet title={seo.title}>
								<html lang={siteLanguage} />
								<meta name="description" content={seo.description} />
								<meta name="image" content={seo.image} />
							</Helmet>
							<Facebook
								desc={seo.description}
								image={seo.image}
								title={seo.title}
								type={article ? 'article' : 'website'}
								url={seo.url}
								locale={ogLanguage}
								name={facebook}
							/>
							<Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
						</>
					)
				}}
			/>
		)
	}
}

SEO.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	banner: PropTypes.string,
	pathname: PropTypes.string,
	article: PropTypes.bool,
	node: PropTypes.object,
}

SEO.defaultProps = {
	title: null,
	desc: null,
	banner: null,
	pathname: null,
	article: false,
	node: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        siteLanguage
        ogLanguage
        author
        twitter
      }
    }
  }
`