import React, { FC } from 'react';
import { PostbodyProps } from './Postbody.types';

export const Postbody: FC<PostbodyProps> = ({ disabled, content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};