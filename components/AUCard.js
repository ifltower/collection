import React, { useEffect } from 'react';

export default function AUCard({ au, onExpand }) {
  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md mb-6 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-2/3">
        <div className="font-semibold text-lg mb-2">
          {au.author} <span className="text-gray-500">@{au.handle}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {au.tags.map((tag, idx) => (
            <span key={idx} className={`text-white text-xs px-3 py-1 rounded-full ${tag.color}`}>
              {tag.name}
            </span>
          ))}
        </div>

        <p className="text-sm leading-relaxed whitespace-pre-line">{au.description}</p>

        <div className="mt-4">
          <blockquote className="twitter-tweet">
            <a href={au.tweet}></a>
          </blockquote>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <div className="font-semibold mb-2">Notes</div>
        <textarea id={`note-${au.id}`} className="border w-full rounded p-2 h-32 resize-none"></textarea>
        <button className="mt-2 bg-primary text-white px-4 py-2 rounded" onClick={() => onExpand(au.id)}>Expand</button>
      </div>
    </div>
  );
}
