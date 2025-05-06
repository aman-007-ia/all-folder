import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        console.log(response);
        setUsers(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error ...</h2>;
  }
  return (
    <div>
      <img src={users.avatar_url} alt={users.name} />
      <h2>{users.name}</h2>
      <h4>works at {users.company}</h4>
      <p>{users.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
