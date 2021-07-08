import { Box, Text } from '@chakra-ui/react';
import { UserReposProps } from '../@types/UserReposProps';
import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiJava,
  SiC,
  SiRuby,
  SiCplusplus,
  SiCsharp,
  SiPython,
} from 'react-icons/si';

export function Repository(repo: UserReposProps) {
  return (
    <Box
      marginBottom="2.5"
      backgroundColor="gray.700"
      padding="2"
      borderRadius="md"
    >
      <Text display="flex" color="purple.400">
        Name:
        <Text color="gray.200" marginLeft="2.5">
          {repo.name}
        </Text>
      </Text>
      <Text color="purple.400">
        Description:
        <Text color="gray.200">{repo.description || 'No description'}</Text>
      </Text>
      <Text display="flex" alignItems="center" color="purple.400">
        Languages:
        <Text marginLeft="2" color="gray.200">
          {repo.language === 'TypeScript' ? (
            <SiTypescript color="#007bcd" />
          ) : repo.language === 'JavaScript' ? (
            <SiJavascript color="#f0dc4e" />
          ) : repo.language === 'CSS' ? (
            <SiCss3 color="#3bb2e0" />
          ) : repo.language === 'C' ? (
            <SiC />
          ) : repo.language === 'Ruby' ? (
            <SiRuby color="#ea3925" />
          ) : repo.language === 'Java' ? (
            <SiJava />
          ) : repo.language === 'C++' ? (
            <SiCplusplus />
          ) : repo.language === 'C#' ? (
            <SiCsharp />
          ) : repo.language === 'Python' ? (
            <SiPython color="#f2dd6f" />
          ) : (
            ''
          )}
        </Text>
      </Text>
      <Text display="flex" color="purple.400">
        Stars:
        <Text color="gray.200" marginLeft="2.5">
          {repo.stargazers_count}
        </Text>
      </Text>
    </Box>
  );
}
