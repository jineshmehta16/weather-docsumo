import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Box
            sx={{
              width: 150,
              height: 50,
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='auto'
              viewBox='0 0 145 22'
              fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.3352 3.3C12.3352 4.05939 11.717 4.675 10.9544 4.675C10.1918 4.675 9.57367 4.05939 9.57367 3.3C9.57367 2.54061 10.1918 1.925 10.9544 1.925C11.717 1.925 12.3352 2.54061 12.3352 3.3ZM11.485 6.55793C11.3123 6.58562 11.135 6.60001 10.9544 6.60001C10.7958 6.60001 10.6399 6.58891 10.4872 6.56746L7.45772 12.5132C8.51538 11.9567 9.72091 11.6416 11.0003 11.6416C12.2668 11.6416 13.4609 11.9503 14.5108 12.4964L11.485 6.55793ZM16.0646 16.6819C15.6311 17.2398 15.373 17.9399 15.373 18.6999C15.373 20.5224 16.8567 21.9999 18.6868 21.9999C20.517 21.9999 22.0006 20.5224 22.0006 18.6999C22.0006 16.8774 20.517 15.3999 18.6868 15.3999C18.5137 15.3999 18.3436 15.4131 18.1776 15.4386L13.2198 5.70843C13.8651 5.10632 14.2682 4.25004 14.2682 3.3C14.2682 1.47746 12.7846 0 10.9544 0C9.12426 0 7.64062 1.47746 7.64062 3.3C7.64062 4.2727 8.06322 5.1471 8.73554 5.75106L3.80117 15.4353C3.6421 15.412 3.47936 15.3999 3.31379 15.3999C1.48363 15.3999 0 16.8773 0 18.6999C0 20.5224 1.48363 21.9999 3.31379 21.9999C5.14394 21.9999 6.62757 20.5224 6.62757 18.6999C6.62757 17.9399 6.36957 17.2399 5.93604 16.682C6.86553 14.8347 8.78423 13.5666 11.0003 13.5666C13.2164 13.5666 15.1351 14.8347 16.0646 16.6819ZM3.31379 20.0749C4.07635 20.0749 4.69453 19.4593 4.69453 18.6999C4.69453 17.9405 4.07635 17.3249 3.31379 17.3249C2.55122 17.3249 1.93304 17.9405 1.93304 18.6999C1.93304 19.4593 2.55122 20.0749 3.31379 20.0749ZM20.0676 18.6999C20.0676 19.4593 19.4494 20.0749 18.6868 20.0749C17.9243 20.0749 17.3061 19.4593 17.3061 18.6999C17.3061 17.9405 17.9243 17.3249 18.6868 17.3249C19.4494 17.3249 20.0676 17.9405 20.0676 18.6999Z'
                fill='currentColor'></path>
              <path
                d='M102.001 18C100.108 18 98.6349 17.456 97.5813 16.368C96.5277 15.28 96.0009 13.7266 96.0009 11.7079V4H99.0671V11.5899C99.0671 14.0543 100.051 15.2865 102.02 15.2865C102.979 15.2865 103.711 14.9883 104.215 14.3919C104.72 13.7954 104.972 12.8614 104.972 11.5899V4H108.001V11.7079C108.001 13.7266 107.474 15.28 106.42 16.368C105.367 17.456 103.894 18 102.001 18Z'
                fill='currentColor'></path>
              <path
                d='M122.918 18L122.898 9.6L118.721 16.52H117.24L113.083 9.78V18H110.001V4H112.718L118.031 12.7L123.263 4H125.96L126.001 18H122.918Z'
                fill='currentColor'></path>
              <path
                d='M83.0958 14.3302C83.5931 14.6425 84.1602 14.9013 84.797 15.1068C85.5939 15.364 86.3909 15.4926 87.1878 15.4926C88.0747 15.4926 88.7303 15.3608 89.1544 15.0972C89.5786 14.8336 89.7907 14.4832 89.7907 14.046C89.7907 13.7245 89.6654 13.4577 89.4147 13.2456C89.1641 13.0334 88.8427 12.863 88.4507 12.7344C88.0586 12.6059 87.5284 12.4644 86.86 12.3101C85.8317 12.0658 84.9898 11.8215 84.3342 11.5772C83.6787 11.3329 83.1163 10.9407 82.6472 10.4006C82.178 9.86056 81.9434 9.14049 81.9434 8.24039C81.9434 7.45602 82.1555 6.74559 82.5797 6.10909C83.0039 5.4726 83.6433 4.9679 84.4981 4.59501C85.3529 4.22211 86.3973 4.03566 87.6313 4.03566C88.4925 4.03566 89.3344 4.13853 90.157 4.34426C90.9784 4.54968 91.6973 4.84483 92.3136 5.22971L93.0822 4L94.0009 7.84043L90.1554 8.6828L90.9612 7.39357C89.8448 6.82657 88.7284 6.54307 87.612 6.54307C86.7379 6.54307 86.092 6.68451 85.6743 6.9674C85.2565 7.25029 85.0476 7.62318 85.0476 8.08609C85.0476 8.549 85.2886 8.89296 85.7707 9.11799C86.2527 9.34301 86.9886 9.56482 87.9783 9.78341C89.0066 10.0277 89.8485 10.272 90.5041 10.5163C91.1596 10.7607 91.722 11.1464 92.1912 11.6736C92.6603 12.2008 92.8949 12.9145 92.8949 13.8146C92.8949 14.5861 92.6796 15.2901 92.249 15.9266C91.8184 16.5631 91.1725 17.0678 90.3113 17.4407C89.4501 17.8136 88.4025 18 87.1685 18C86.1016 18 85.0701 17.8553 84.074 17.566C83.1166 17.288 82.3403 16.9298 81.7451 16.4914L80.9195 17.8123L80.0009 13.9719L83.8463 13.1295L83.0958 14.3302Z'
                fill='currentColor'></path>
              <path
                d='M71.944 18C70.449 18 69.0972 17.7003 67.8886 17.1008C66.68 16.5014 65.7299 15.6699 65.0383 14.6064C64.3467 13.5428 64.0009 12.3407 64.0009 11C64.0009 9.65929 64.3467 8.45719 65.0383 7.39365C65.7299 6.33011 66.68 5.49862 67.8886 4.89917C69.0972 4.29972 70.4559 4 71.9649 4C73.2364 4 74.3856 4.20626 75.4125 4.61878C76.4395 5.03131 77.3022 5.62431 78.0009 6.39779L75.8212 8.25414C74.8292 7.19705 73.5997 6.66851 72.1326 6.66851C71.2244 6.66851 70.414 6.85221 69.7015 7.21961C68.9889 7.58702 68.4335 8.09944 68.0353 8.75691C67.6371 9.41437 67.438 10.1621 67.438 11C67.438 11.8379 67.6371 12.5856 68.0353 13.2431C68.4335 13.9006 68.9889 14.413 69.7015 14.7804C70.414 15.1478 71.2244 15.3315 72.1326 15.3315C73.5997 15.3315 74.8292 14.7965 75.8212 13.7265L78.0009 15.5829C77.3022 16.3692 76.436 16.9687 75.4021 17.3812C74.3681 17.7937 73.2154 18 71.944 18Z'
                fill='currentColor'></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M50.6527 17.0912C51.795 17.6971 53.0776 18 54.5006 18C55.9236 18 57.203 17.6971 58.3387 17.0912C59.4745 16.4853 60.3688 15.6506 61.0215 14.587C61.6742 13.5235 62.0006 12.3278 62.0006 11C62.0006 9.67218 61.6742 8.47652 61.0215 7.41298C60.3688 6.34944 59.4745 5.51474 58.3387 4.90884C57.203 4.30294 55.9236 4 54.5006 4C53.0776 4 51.795 4.30294 50.6527 4.90884C49.5104 5.51474 48.6161 6.34944 47.9699 7.41298C47.3237 8.47652 47.0006 9.67218 47.0006 11C47.0006 12.3278 47.3237 13.5235 47.9699 14.587C48.6161 15.6506 49.5104 16.4853 50.6527 17.0912ZM56.6952 14.7798C56.0425 15.1473 55.3114 15.331 54.502 15.331C53.6926 15.331 52.9615 15.1473 52.3088 14.7798C51.6561 14.4124 51.1437 13.9 50.7716 13.2426C50.3995 12.5851 50.2135 11.8374 50.2135 10.9995C50.2135 10.1615 50.3995 9.41383 50.7716 8.75637C51.1437 8.09891 51.6561 7.58648 52.3088 7.21907C52.9615 6.85167 53.6926 6.66797 54.502 6.66797C55.3114 6.66797 56.0425 6.85167 56.6952 7.21907C57.348 7.58648 57.8604 8.09891 58.2324 8.75637C58.6045 9.41383 58.7905 10.1615 58.7905 10.9995C58.7905 11.8374 58.6045 12.5851 58.2324 13.2426C57.8604 13.9 57.348 14.4124 56.6952 14.7798Z'
                fill='currentColor'></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M131.653 17.0912C132.795 17.6971 134.078 18 135.501 18C136.924 18 138.203 17.6971 139.339 17.0912C140.475 16.4853 141.369 15.6506 142.022 14.587C142.675 13.5235 143.001 12.3278 143.001 11C143.001 9.67218 142.675 8.47652 142.022 7.41298C141.369 6.34944 140.475 5.51474 139.339 4.90884C138.203 4.30294 136.924 4 135.501 4C134.078 4 132.795 4.30294 131.653 4.90884C130.511 5.51474 129.617 6.34944 128.97 7.41298C128.324 8.47652 128.001 9.67218 128.001 11C128.001 12.3278 128.324 13.5235 128.97 14.587C129.617 15.6506 130.511 16.4853 131.653 17.0912ZM137.696 14.7798C137.043 15.1473 136.312 15.331 135.502 15.331C134.693 15.331 133.962 15.1473 133.309 14.7798C132.656 14.4124 132.144 13.9 131.772 13.2426C131.4 12.5851 131.214 11.8374 131.214 10.9995C131.214 10.1615 131.4 9.41383 131.772 8.75637C132.144 8.09891 132.656 7.58648 133.309 7.21907C133.962 6.85167 134.693 6.66797 135.502 6.66797C136.312 6.66797 137.043 6.85167 137.696 7.21907C138.348 7.58648 138.861 8.09891 139.233 8.75637C139.605 9.41383 139.791 10.1615 139.791 10.9995C139.791 11.8374 139.605 12.5851 139.233 13.2426C138.861 13.9 138.348 14.4124 137.696 14.7798Z'
                fill='currentColor'></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M38.1152 4H32.243V18H38.1152C39.5186 18 40.7589 17.71 41.8361 17.13C42.9133 16.55 43.7504 15.7333 44.3474 14.68C44.9445 13.6267 45.243 12.4 45.243 11C45.243 9.59999 44.9445 8.37334 44.3474 7.32C43.7504 6.26666 42.9133 5.45 41.8361 4.87C40.7589 4.29 39.5186 4 38.1152 4ZM41.3959 14.068C40.5523 14.8229 39.422 15.2003 38.0049 15.2003H35.0087V6.80029H38.0049C39.422 6.80029 40.5523 7.17771 41.3959 7.93255C42.2394 8.68739 42.6612 9.70996 42.6612 11.0003C42.6612 12.2906 42.2394 13.3132 41.3959 14.068Z'
                fill='currentColor'></path>
            </svg>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
