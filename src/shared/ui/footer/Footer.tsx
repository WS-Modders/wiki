"use client";
import React, { FC } from 'react';
import { FooterProps } from './Footer.types';

export const Footer: FC<FooterProps> = ({ disabled }) => {
  return (
    <div className="footer">
        <div>
          <div>
            <h1>Special Pages</h1>
            <ul>
              <li>
                <a href="https://github.com/wsmodders/wiki" className="" title="A list of recent changes">
                  <i className="mdi mdi-history"></i> Recent Changes </a>
              </li>
              <li>
                <a href="https://github.com/wsmodders/wiki" className="" title="War Selection Wiki GitHub">
                  <i className="mdi mdi-github"></i> GitHub </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Helpful Links</h1>
            <ul>
              <li>
                <a href="/" className="active" title="Tutorials, reference and other resources for War Selection players, developers and etc.">
                <i className="mdi mdi-wikipedia"></i>  Wiki </a>
              </li>
              <li>
                <a href="https://discord.gg/6u4fnNB" className="" title="Official Discord">
                <i className="mdi mdi-forum"></i> Official Discord </a>
              </li>
              <li>
                <a href="https://store.steampowered.com/app/1022450/War_Selection" className="" title="Steam Page">
                <i className="mdi mdi-steam"></i> Steam Page </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

