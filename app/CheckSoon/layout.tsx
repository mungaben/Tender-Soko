





import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Tender Soko| Check Soon',
    description: 'tender soko  check available tenders',
  }

export default function CheckSoonLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            {children}
        </div>
    )
}
