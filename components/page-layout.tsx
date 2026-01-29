"use client";

import React from 'react';
import Link from 'next/link';
import NAVBAR from '@/config/navbar';
import CONTACTS from '@/config/contacts';
import { Phone, MapPin } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Title */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Sportovní hala Ráječko
          </h1>
          <p className="text-blue-100 text-lg">
            Moderní sportovní a společenské centrum
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-start gap-0 sm:gap-1 py-0">
            {NAVBAR.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-800 transition-colors rounded-none sm:rounded-md w-full sm:w-auto border-b sm:border-b-0 border-gray-800 last:border-b-0 sm:last:border-b-0"
              >
                <span className="flex items-center">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>

        {/* Contact Info Sidebar */}
        <aside className="w-full md:w-80 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 p-6 md:p-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakt</h2>
            
            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adresa haly</h3>
                  {CONTACTS.address.map((line, index) => (
                    <p key={index} className="text-gray-700 text-sm mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                  {CONTACTS.phoneNumbers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold block text-sm"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Provozovatel</h3>
              {CONTACTS.owner.map((line, index) => (
                <p key={index} className="text-gray-600 text-xs mb-1">
                  {line}
                </p>
              ))}
              {CONTACTS.ico && (
                <p className="text-gray-600 text-xs mt-2">
                  IČO: {CONTACTS.ico}
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
