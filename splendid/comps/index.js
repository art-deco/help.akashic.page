import makeClassGetter from './__mcg'
const renameMaps = {  }
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from './__competent-lib'
import Ellipsis from '../components/ellipsis.jsx'
import GithubBadge from '../components/github-badge.jsx'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'ellipsis': Ellipsis,
  'github-badge': GithubBadge,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'github-badge',
  id: 'c301a',
  props: {
    owner: 'art-deco',
    name: 'help.akashic.page',
  },
},
{
  key: 'social-buttons',
  id: 'c14e9',
  props: {
    url: 'https://help.akshic.page/',
    meta: true,
    className: 'b-xq b-Hk',
  },
},
{
  key: 'ellipsis',
  id: 'ceb55',
  props: {
    timeout: 300,
  },
  children: ["\n  Please bear one moment while I add the content\n"],
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = Comp.plain || (/^\s*class\s+/.test(Comp.toString()) && !Component.isPrototypeOf(Comp))
  props.splendid = { mount: '/', addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    if (!el) return
    const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id: Id, plain })
    let comp
    el.render = () => {
      comp = start(renderMeta, Comp, comp, el, parent, props, children, { render, Component, h })
      return comp
    }
    el.render.meta = renderMeta
    io.observe(el)
  })
})
