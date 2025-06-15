interface Item {
  id: number;
  title: string;
  content: string;
}


const MinwookList = ({ list }: { list: Item[] }) => {
  return (
    <div>
      {list?.length}
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          {
            list?.length < 1 ? (
              <tr>
                <td colSpan={2}>데이터가 없습니다.</td>
              </tr>
            ) : (
              list?.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                </tr>
              ))
            )
          }
          
        </tbody>
      </table>  
    </div>
  )
}

export default MinwookList;