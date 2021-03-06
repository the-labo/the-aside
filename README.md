the-aside
==========

<!---
This file is generated by the-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-aside
[bd_travis_url]: http://travis-ci.org/the-labo/the-aside
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-aside.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-aside
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-aside.svg?token=
[bd_license_url]: https://github.com/the-labo/the-aside/blob/master/LICENSE
[bd_npm_url]: http://www.npmjs.org/package/the-aside
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-aside.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Aside of the-component

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-aside --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

import React from 'react'
import { TheAside, TheAsideStyle } from 'the-aside'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheAsideStyle/>
        <TheAside.Container>
          <TheAside.For>
            <div>
              This is the main content aside for
            </div>
          </TheAside.For>
          <TheAside>
            <div style={{
              background: '#F0F0F0',
              padding: '8px',
              width: '128px'
            }}>This is aside
            </div>
          </TheAside>
        </TheAside.Container>
      </div>

    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheAside

Aside of the-component


### TheAsideStyle

Style for TheAside

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `options` | object  | Style options | `{}` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-aside/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
