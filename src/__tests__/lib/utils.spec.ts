import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('Utils - cn function', () => {
  it('merges class names correctly', () => {
    const result = cn('foo', 'bar')
    expect(result).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    const result = cn('foo', false && 'bar', 'baz')
    expect(result).toBe('foo baz')
  })

  it('handles Tailwind conflict resolution', () => {
    const result = cn('px-2', 'px-4')
    expect(result).toBe('px-4')
  })

  it('handles object syntax', () => {
    const result = cn({ foo: true, bar: false, baz: true })
    expect(result).toContain('foo')
    expect(result).toContain('baz')
    expect(result).not.toContain('bar')
  })

  it('handles array syntax', () => {
    const result = cn(['foo', 'bar'])
    expect(result).toBe('foo bar')
  })

  it('handles mixed inputs', () => {
    const result = cn('foo', ['bar', 'baz'], { qux: true })
    expect(result).toContain('foo')
    expect(result).toContain('bar')
    expect(result).toContain('baz')
    expect(result).toContain('qux')
  })

  it('returns empty string for no arguments', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('handles undefined and null values', () => {
    const result = cn('foo', undefined, 'bar', null, 'baz')
    expect(result).toBe('foo bar baz')
  })
})
