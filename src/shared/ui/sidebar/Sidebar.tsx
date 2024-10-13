import React, { FC, useState, useMemo } from 'react';
import { getAllPosts } from "@/shared/libs/api";
import { SidebarProps } from './Sidebar.types';
import { Details } from './details';
import Link from "next/link";

export const Sidebar: FC<SidebarProps> = ({ disabled }) => {
  const posts = getAllPosts();

  // Function to count posts in each category
  const countPostsByCategory = () => {
    return posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };

  const countPostsBySub = () => {
    return posts.reduce((acc, post) => {
      acc[post.sub] = (acc[post.sub] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };

  const getIconBySub = () => {
    return posts.reduce((acc, post) => {
      acc[post.sub] = post.icon;
      return acc;
    }, {} as Record<string, string>);
  };

  const subCounts = countPostsBySub();
  const categoryCounts = countPostsByCategory();
  const iconBySub = getIconBySub();

  // Group posts by category and sub
  const groupedPosts = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = {};
    }
    if (!acc[post.category][post.sub]) {
      acc[post.category][post.sub] = [];
    }
    acc[post.category][post.sub].push(post);
    return acc;
  }, {} as Record<string, Record<string, typeof posts>>);

  const iconClass = posts.find(post => post === posts[3]);
  console.log(iconClass);
  return (
    <div id="sidebar">
      <div>
        <div id="ident">
          <div className="icon">
            <a href="/">
              <img src="https://cdn.discordapp.com/icons/632289073075322911/a_d84959ed06a47d628abea19be23b8dfd.gif" alt="War Selection Logo" />
            </a>
          </div>
          <h1 className="title">
            <a href="/">War Selection Wiki</a>
          </h1>
        </div>
        <div id="topbar">
          <div className="search">
            <input autoComplete="off" id="search" type="search" placeholder="(Soon) press to quick search" disabled/>
          </div>
        </div>
        <div id="searchresults"></div>
        <div id="contents">
          {Object.entries(groupedPosts).map(([category, subs], icon) => (
            <div key={category}>
              <div className="sectionheader">{category}</div>
              {Object.entries(subs).map(([sub, posts], subIndex) => (
                <div className="section" key={sub}>
                  <Details path={`/${posts[subIndex]}`} posts={posts}>
                    <summary>
                      <div>
                        <i className={`mdi ${iconBySub[sub]}`}></i> {sub} <span className="child-count">{subCounts[sub]}</span>
                      </div>
                    </summary>
                  </Details>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
