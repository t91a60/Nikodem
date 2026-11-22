import assert from 'node:assert/strict'
import { test } from 'node:test'
import { commands } from '../data/commands.js'
import { projects } from '../data/projects.js'
import { generateSupplementaryJsonLd } from './jsonLd.js'

test('the terminal and structured metadata use the same project catalogue', () => {
  const listing = commands.projects()
  const metadata = generateSupplementaryJsonLd().filter(item => item.codeRepository)
  assert.deepEqual(metadata.map(item => item.codeRepository), projects.map(project => project.link))
  for (const project of projects) {
    assert.ok(listing.includes(project.id))
    assert.ok(commands.open(project.id).includes(project.link))
    assert.equal(commands.open(project.title), commands.open(project.id))
  }
})

test('opening an empty or unknown project returns guidance', () => {
  assert.match(commands.open(''), /Usage/)
  assert.match(commands.open('constructor'), /Project not found/)
})
