'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Download, Plus, Search, X } from 'lucide-react'
import {
  INTERPRETER_STATUSES,
  US_STATES,
  type Interpreter,
} from '@/lib/interpreters'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { StatusBadge } from '@/components/admin/status-badge'

const selectClass =
  'h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30'

function toCsv(rows: Interpreter[]) {
  const headers = [
    'Full Name',
    'Email',
    'Phone',
    'Language Pairs',
    'State',
    'Availability',
    'Experience',
    'Modality',
    'Location',
    'Certifications',
    'Status',
    'Notes',
    'Source',
    'Created',
  ]
  const escape = (value: unknown) => {
    const str = value == null ? '' : String(value)
    return `"${str.replace(/"/g, '""')}"`
  }
  const lines = rows.map((r) =>
    [
      r.full_name,
      r.email,
      r.phone,
      r.language_pairs,
      r.state,
      r.availability,
      r.experience,
      r.modality,
      r.location,
      r.certifications,
      r.status,
      r.notes,
      r.source,
      new Date(r.created_at).toLocaleDateString(),
    ]
      .map(escape)
      .join(','),
  )
  return [headers.map(escape).join(','), ...lines].join('\n')
}

export function InterpretersExplorer({
  interpreters,
}: {
  interpreters: Interpreter[]
}) {
  const [name, setName] = useState('')
  const [language, setLanguage] = useState('')
  const [state, setState] = useState('')
  const [availability, setAvailability] = useState('')
  const [status, setStatus] = useState('')

  const availabilityOptions = useMemo(() => {
    const set = new Set<string>()
    for (const i of interpreters) if (i.availability) set.add(i.availability)
    return Array.from(set).sort()
  }, [interpreters])

  const filtered = useMemo(() => {
    return interpreters.filter((i) => {
      if (name && !i.full_name.toLowerCase().includes(name.toLowerCase()))
        return false
      if (
        language &&
        !(i.language_pairs ?? '').toLowerCase().includes(language.toLowerCase())
      )
        return false
      if (state && i.state !== state) return false
      if (availability && i.availability !== availability) return false
      if (status && i.status !== status) return false
      return true
    })
  }, [interpreters, name, language, state, availability, status])

  const hasFilters = name || language || state || availability || status

  function handleExport() {
    const csv = toCsv(filtered)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `interpreters-${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  function clearFilters() {
    setName('')
    setLanguage('')
    setState('')
    setAvailability('')
    setStatus('')
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Search by name"
              aria-label="Search by interpreter name"
              className={cn(selectClass, 'w-full pl-9')}
            />
          </div>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="Search by language pair"
              aria-label="Search by language pair"
              className={cn(selectClass, 'w-full pl-9')}
            />
          </div>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            aria-label="Filter by state"
            className={cn(selectClass, 'w-full')}
          >
            <option value="">All states</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            aria-label="Filter by availability"
            className={cn(selectClass, 'w-full')}
          >
            <option value="">All availability</option>
            {availabilityOptions.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Filter by status"
            className={cn(selectClass)}
          >
            <option value="">All statuses</option>
            {INTERPRETER_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {hasFilters ? (
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
              Clear
            </button>
          ) : null}

          <div className="ms-auto flex items-center gap-2">
            <button
              type="button"
              onClick={handleExport}
              disabled={filtered.length === 0}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-10 disabled:cursor-not-allowed disabled:opacity-50',
              )}
            >
              <Download className="size-4" aria-hidden="true" />
              Export CSV
            </button>
            <Link
              href="/admin/interpreters/new"
              className={cn(buttonVariants({ variant: 'default' }), 'h-10')}
            >
              <Plus className="size-4" aria-hidden="true" />
              Add
            </Link>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Showing <span className="font-medium text-foreground">{filtered.length}</span> of{' '}
        {interpreters.length} interpreters
      </p>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-border bg-card md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Language pairs</th>
              <th className="px-4 py-3 font-medium">State</th>
              <th className="px-4 py-3 font-medium">Availability</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((i) => (
              <tr
                key={i.id}
                className="cursor-pointer transition-colors hover:bg-muted/40"
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/interpreters/${i.id}`}
                    className="block font-medium text-foreground hover:text-primary"
                  >
                    {i.full_name}
                    <span className="block text-xs font-normal text-muted-foreground">
                      {i.email}
                    </span>
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {i.language_pairs || '—'}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{i.state || '—'}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {i.availability || '—'}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={i.status} />
                </td>
              </tr>
            ))}
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-12 text-center text-muted-foreground"
                >
                  No interpreters match your filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-3 md:hidden">
        {filtered.map((i) => (
          <Link
            key={i.id}
            href={`/admin/interpreters/${i.id}`}
            className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-foreground">{i.full_name}</p>
                <p className="text-xs text-muted-foreground">{i.email}</p>
              </div>
              <StatusBadge status={i.status} />
            </div>
            <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <div>
                <dt className="font-medium text-foreground/70">Languages</dt>
                <dd>{i.language_pairs || '—'}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground/70">State</dt>
                <dd>{i.state || '—'}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground/70">Availability</dt>
                <dd>{i.availability || '—'}</dd>
              </div>
            </dl>
          </Link>
        ))}
        {filtered.length === 0 ? (
          <p className="rounded-xl border border-border bg-card px-4 py-12 text-center text-muted-foreground">
            No interpreters match your filters.
          </p>
        ) : null}
      </div>
    </div>
  )
}
