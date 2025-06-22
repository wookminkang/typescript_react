import React, { useState } from 'react';
import useReactQuery, { fetchApi } from '../../api/reactQuery';


const tabs = [
  { key: 'posts', label: '공지사항', boardType: 'posts' },
  { key: 'albums', label: '이벤트', boardType: 'albums' },
  { key: 'todos', label: '자유', boardType: 'todos' },
];


const Board: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('posts');

  const { data: posts, isLoading, error } = useReactQuery({ 
    queryKey: ['posts', currentTab], 
    queryFn: () => fetchApi({ url: `https://jsonplaceholder.typicode.com/${currentTab}`, method: 'GET', data: {} })
  });

  return (
    <div>
      {/* 탭 */}
      <nav style={{ marginBottom: 20 }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setCurrentTab(tab.key)}
            style={{
              marginRight: 10,
              padding: '8px 16px',
              backgroundColor: currentTab === tab.key ? '#0070f3' : '#eee',
              color: currentTab === tab.key ? '#fff' : '#000',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* 리스트 영역 */}
      <section>
        {isLoading && <p>로딩중...</p>}
        {error && <p>오류가 발생했습니다.</p>}
        {!isLoading && posts && posts.length === 0 && <p>게시물이 없습니다.</p>}
        <ul>
          {posts?.map((post) => (
            <li key={post.id} style={{ marginBottom: 10 }}>
              <strong>{post.title}</strong>
              {post.content && <p>{post.content}</p>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Board;
