import React from "react";

// mui
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  styled,
} from "@mui/material";

// icons
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import BusinessIcon from "@mui/icons-material/Business";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import XIcon from "@mui/icons-material/X";

// lib
import { useLocation, useNavigate } from "react-router";

// hooks
import useFetch from "../../hooks/useFetch";

const StyledAvatar = styled("img")(() => ({
  width: "260px",
  height: "260px",
  borderRadius: "50%",
}));

export default function SingleUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state;

  const pathArr = location.pathname.split("/");
  const lastElement = pathArr[pathArr.length - 1];

  const { loading, error, data } = useFetch({
    url: `https://api.github.com/users/${
      locationState?.githubUserName || lastElement
    }`,
    method: "get",
    key: [
      "app",
      "get",
      "user",
      {
        name: `${locationState?.githubUserName || lastElement}`,
      },
    ],
    cache: {
      enabled: true,
      suspense: 400,
    },
    disableReRender: true,
  });

  const handlePrevious = () => {
    navigate("/users", {
      state: {
        currentPage: locationState?.currentPage,
      },
    });
  };

  return (
    <Container maxWidth="xl">
      <Box pb={2}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackRoundedIcon />}
          onClick={handlePrevious}
        >
          Back
        </Button>
      </Box>
      <Box
        display="flex"
        bgcolor="common.white"
        zIndex={10}
        position="relative"
        borderRadius={1}
        boxShadow="0px 1px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
        p={{
          xs: 2,
          md: 3,
        }}
        gap={3}
        flexDirection={{
          xs: "column",
          md: "row",
        }}
      >
        <Box
          display="flex"
          gap={2}
          flexDirection="column"
          alignItems="center"
          maxWidth={320}
          width={1}
        >
          <StyledAvatar src={data?.avatar_url} alt="avatar-url" />
          <Typography variant="h4" fontWeight={600}>
            {data?.name}
          </Typography>
          <Typography variant="body2">{data?.bio}</Typography>
        </Box>
        <Box
          width={{
            xs: 1,
            md: "2px",
          }}
          height={{
            xs: "2px",
            md: "unset",
          }}
          bgcolor="#EAECF0"
        />
        <Box display="flex" flex={1} gap={2} flexDirection="column">
          <Box display="flex" gap={2} flexWrap="wrap" alignItems="center">
            <Box
              p={2}
              borderRadius={0.5}
              flex="1 1 250px"
              width={1}
              display="flex"
              gap={1}
              flexDirection="column"
              alignItems="center"
              boxShadow="0px 1px 1px 1px rgba(0,0,0,0.2)"
            >
              <Typography variant="h4">{data?.followers}</Typography>
              <Typography variant="body2" fontWeight={500}>
                Followers
              </Typography>
            </Box>
            <Box
              p={2}
              borderRadius={0.5}
              width={1}
              display="flex"
              gap={1}
              flexDirection="column"
              alignItems="center"
              boxShadow="0px 1px 1px 1px rgba(0,0,0,0.2)"
              flex="1 1 250px"
            >
              <Typography variant="h4">{data?.following}</Typography>
              <Typography variant="body2" fontWeight={500}>
                Following
              </Typography>
            </Box>
            <Box
              p={2}
              borderRadius={0.5}
              flex="1 1 250px"
              width={1}
              display="flex"
              gap={1}
              flexDirection="column"
              alignItems="center"
              boxShadow="0px 1px 1px 1px rgba(0,0,0,0.2)"
            >
              <Typography variant="h4">{data?.public_repos}</Typography>
              <Typography variant="body2" fontWeight={500}>
                Public Repos
              </Typography>
            </Box>
            <Box
              p={2}
              borderRadius={0.5}
              flex="1 1 250px"
              width={1}
              display="flex"
              gap={1}
              flexDirection="column"
              alignItems="center"
              boxShadow="0px 1px 1px 1px rgba(0,0,0,0.2)"
            >
              <Typography variant="h4">{data?.public_gists}</Typography>
              <Typography variant="body2" fontWeight={500}>
                Public Gists
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={1.5}>
            <Box component="a" href={`${data?.html_url}`} target="_blank">
              <Box
                display="flex"
                gap={1}
                alignItems="center"
                color="common.black"
              >
                <GitHubIcon />
                <Typography variant="body1">Github</Typography>
              </Box>
            </Box>
            {data?.twitter_username && (
              <Box
                component="a"
                href={`https://twitter.com/${data?.twitter_username}`}
                target="_blank"
              >
                <Box
                  display="flex"
                  gap={1}
                  alignItems="center"
                  color="common.black"
                >
                  <XIcon />
                  <Typography variant="body1">Twitter</Typography>
                </Box>
              </Box>
            )}
            {data?.blog && (
              <Box component="a" href={`${data?.blog}`} target="_blank">
                <Box
                  display="flex"
                  gap={1}
                  alignItems="center"
                  color="common.black"
                >
                  <LanguageRoundedIcon />
                  <Typography variant="body1">Blog</Typography>
                </Box>
              </Box>
            )}
            {data?.company && (
              <Box>
                <Box
                  display="flex"
                  gap={1}
                  alignItems="center"
                  color="common.black"
                >
                  <BusinessIcon />
                  <Typography variant="body1">
                    Company - {data?.company}
                  </Typography>
                </Box>
              </Box>
            )}
            {data?.location && (
              <Box>
                <Box
                  display="flex"
                  gap={1}
                  alignItems="center"
                  color="common.black"
                >
                  <LocationOnIcon />
                  <Typography variant="body1">
                    Location - {data?.location}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        {loading && (
          <Box
            height={1}
            width={1}
            bgcolor="common.white"
            position="absolute"
            top={0}
            left={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Container>
  );
}
