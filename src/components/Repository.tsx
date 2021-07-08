import { UserReposProps } from "../@types/UserReposProps";

export function Repository(repo: UserReposProps) {
  return (
    <div>
      <p>{repo.name}</p>
      <p>{repo.description}</p>
      <p>{repo.language}</p>
      <p>{repo.stargazers_count}</p>
    </div>
  );
}
