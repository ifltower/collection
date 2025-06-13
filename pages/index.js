import { useEffect } from 'react';
import AUCard from '@/components/AUCard';

const aus = [
  {
    id: 'au1',
    author: 'chu',
    handle: 'foolsunkist',
    description: `yours pa rin, forever and always.\na #renmin / #jaemren mini au.\njust jav, rafa, and a series of trips down memory lanes and plans for the future.\na cosc-verse anniversary series.`,
    tweet: 'https://twitter.com/foolsunkist/status/1822996183612301646',
    tags: [
      { name: 'Filipino', color: 'bg-tagFilipino' },
      { name: 'Special', color: 'bg-tagSpecial' },
      { name: 'COMPLETED', color: 'bg-tagCompleted' },
    ],
  },
];

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      aus.forEach(au => {
        const existing = localStorage.getItem(`note-${au.id}`);
        if (existing) {
          document.getElementById(`note-${au.id}`).value = existing;
        }
      });
    }

    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  const handleExpand = (id) => {
    alert("Fullscreen note for " + id + " — feature coming soon");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-inter">
      <h1 className="text-3xl font-bold mb-8">renmin collection!</h1>

      {aus.map((au) => (
        <AUCard key={au.id} au={au} onExpand={handleExpand} />
      ))}

      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
}
