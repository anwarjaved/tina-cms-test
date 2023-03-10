<p align="right">
    <a href="https://badge.fury.io/rb/tina-cms-test"><img src="https://badge.fury.io/rb/tina-cms-test.svg" alt="Gem version"></a> <a href="https://github.com/anwarjaved/tina-cms-test/actions/workflows/ci.yml"><img src="https://github.com/anwarjaved/tina-cms-test/actions/workflows/ci.yml/badge.svg" alt="CI Build status"></a> <a href="https://app.netlify.com/sites/tina-cms-test/deploys"><img src="https://api.netlify.com/api/v1/badges/9dc0386d-c2a4-4077-ad83-f02c33a6c0ca/deploy-status" alt="Netlify Status"></a>
</p>
<br><br>
<p align="center">
    <h1 align="center">Just the Docs</h1>
    <p align="center">A modern, highly customizable, and responsive Jekyll theme for documentation with built-in search.<br>Easily hosted on GitHub Pages with few dependencies.</p>
    <p align="center"><strong><a href="https://anwarjaved.github.io/tina-cms-test/">See it in action!</a></strong></p>
    <br><br><br>
</p>

<p align="center">A video walkthrough of various Just the Docs features</p>

https://user-images.githubusercontent.com/85418632/211225192-7e5d1116-2f4f-4305-bb9b-437fe47df071.mp4

## Installation

### Use the template

The [Just the Docs Template] provides the simplest, quickest, and easiest way to create a new website that uses the Just the Docs theme. To get started with creating a site, just click "[use the template]"!

Note: To use the theme, you do ***not*** need to clone or fork the [Just the Docs repo]! You should do that only if you intend to browse the theme docs locally, contribute to the development of the theme, or develop a new theme based on Just the Docs.

You can easily set the site created by the template to be published on [GitHub Pages] – the [template README] file explains how to do that, along with other details.

If [Jekyll] is installed on your computer, you can also build and preview the created site *locally*. This lets you test changes before committing them, and avoids waiting for GitHub Pages.[^2] And you will be able to deploy your local build to a different platform than GitHub Pages.

More specifically, the created site:

- uses a gem-based approach, i.e. uses a `Gemfile` and loads the `tina-cms-test` gem
- uses the [GitHub Pages / Actions workflow] to build and publish the site on GitHub Pages

Other than that, you're free to customize sites that you create with the template, however you like. You can easily change the versions of `tina-cms-test` and Jekyll it uses, as well as adding further plugins.

### Use RubyGems

Alternatively, you can install the theme as a Ruby Gem, without creating a new site.

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "tina-cms-test"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: tina-cms-test
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install tina-cms-test

Alternatively, you can run it inside Docker while developing your site

    $ docker-compose up

## Usage

[View the documentation][Just the Docs] for usage information.

## Contributing

Bug reports, proposals of new features, and pull requests are welcome on GitHub at https://github.com/anwarjaved/tina-cms-test. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

### Submitting code changes:

- Submit an [Issue](https://github.com/anwarjaved/tina-cms-test/issues) that motivates the changes, using the appropriate template
- Discuss the proposed changes with other users and the maintainers
- Open a [Pull Request](https://github.com/anwarjaved/tina-cms-test/pulls)
- Ensure all CI tests pass
- Provide instructions to check the effect of the changes
- Await code review

### Design and development principles of this theme:

1. As few dependencies as possible
2. No build script needed
3. First class mobile experience
4. Make the content shine

## Development

To set up your environment to develop this theme: fork this repo, the run `bundle install` from the root directory.

A modern [devcontainer configuration](https://code.visualstudio.com/docs/remote/containers) for VSCode is included.

Your theme is set up just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When this theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be included in the gem.

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

[^2]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Jekyll]: https://jekyllrb.com
[Just the Docs Template]: https://anwarjaved.github.io/tina-cms-test/-template/
[Just the Docs]: https://anwarjaved.github.io/tina-cms-test/
[Just the Docs repo]: https://github.com/anwarjaved/tina-cms-test
[GitHub Pages]: https://pages.github.com/
[Template README]: https://github.com/anwarjaved/tina-cms-test-template/blob/main/README.md
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[use the template]: https://github.com/anwarjaved/tina-cms-test-template/generate
