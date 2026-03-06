'use client';
import { useState } from 'react';
import { TextScramble } from '@/components/motion-primitives/text-scramble';
import { TransitionPanel } from '@/components/motion-primitives/transition-panel';
import { TABS } from '@/lib/tabs';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='min-h-screen px-8 pt-24'>
      <div className='mx-auto w-full max-w-lg'>
        <div className='mb-4 flex space-x-2'>
          {TABS.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-md px-3 py-1 text-sm font-medium ${
                activeIndex === index
                  ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                  : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className='min-h-[120px] overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            variants={{
              enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
              center: { opacity: 1, y: 0, filter: 'blur(0px)' },
              exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
            }}
          >
            {TABS.map((item, index) => (
              <div key={index} className='py-2'>
                <h3 className='mb-2 font-medium text-zinc-800 dark:text-zinc-100'>
                  {item.subtitle}
                </h3>
                <ul className='mt-14 space-y-2'>
                  {item.links.map((link, linkIndex) =>
                    link.label === '' ? (
                      <li key={linkIndex} className='h-4' />
                    ) : (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                        >
                          <TextScramble className='font-mono text-sm uppercase'>
                            {link.label}
                          </TextScramble>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </div>
  );
}
