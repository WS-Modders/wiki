"use client";
import React, { FC } from 'react';
import { ToolbarProps } from './Toolbar.types';

export const Toolbar: FC<ToolbarProps> = ({ disabled }) => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('visible');
    }
  };

  return (
    <div id="toolbar">
      <div>
        <div>
          <button onClick={toggleSidebar}>
            <i className="mdi mdi-menu"></i>
          </button>
        </div>

        <div className="grow"></div>

        <h1 className="title">
          <a href="/">War Selection Wiki</a>
        </h1>
      </div>
    </div>
  );
};