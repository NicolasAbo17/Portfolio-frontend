import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const WorkDetail = () => {
  const { workId } = useParams();

  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "works" && _id == $workId][0]';
    client.fetch(query, { workId })
      .then((data) => {
        setWork(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [workId]);

  if (loading) return <p>Loading...</p>;
  if (!work) return <p>No work found for ID: {workId}</p>;

  return (
    <div className="app__work-detail app__flex">
      <h1 className="head-text">{work.title}</h1>
      {work.videoUrl && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(work.videoUrl).search).get('v')}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      <p>{work.description}</p>
    </div>
  );
};

export default AppWrap(
  MotionWrap(WorkDetail, 'app__work-detail'),
  'work',
  'app__primarybg',
);
