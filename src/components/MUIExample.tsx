import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Tabs,
  Tab,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Chip,
  Avatar,
  Container,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Share as ShareIcon,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const MUIExample: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const actions = [
    { icon: <AddIcon />, name: 'Add' },
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <DeleteIcon />, name: 'Delete' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI 예제 앱
          </Typography>
          <Button color="inherit" onClick={() => setSnackbarOpen(true)}>
            알림
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="홈" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="프로필" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="설정" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Tabs */}
          <Paper sx={{ width: '100%' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
              <Tab label="탭 1" />
              <Tab label="탭 2" />
              <Tab label="탭 3" />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
              <Typography variant="h6">첫 번째 탭 내용</Typography>
              <Typography paragraph>
                이것은 첫 번째 탭의 내용입니다. 다양한 MUI 컴포넌트들을 확인할 수 있습니다.
              </Typography>
              <Button variant="contained" onClick={() => setDialogOpen(true)}>
                다이얼로그 열기
              </Button>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6">두 번째 탭 내용</Typography>
              <TextField
                fullWidth
                label="텍스트 입력"
                variant="outlined"
                margin="normal"
              />
              <Box sx={{ mt: 2 }}>
                <Chip label="태그 1" color="primary" sx={{ mr: 1 }} />
                <Chip label="태그 2" color="secondary" sx={{ mr: 1 }} />
                <Chip label="태그 3" variant="outlined" />
              </Box>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6">세 번째 탭 내용</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Card sx={{ minWidth: 200, flex: 1 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      카드 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      카드 내용입니다.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 200, flex: 1 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      카드 2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      카드 내용입니다.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 200, flex: 1 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      카드 3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      카드 내용입니다.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </TabPanel>
          </Paper>

          {/* Cards Row */}
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {/* User Profile Card */}
            <Card sx={{ flex: 1, minWidth: 300 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2 }}>U</Avatar>
                  <Box>
                    <Typography variant="h6">사용자 이름</Typography>
                    <Typography variant="body2" color="text.secondary">
                      user@example.com
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" paragraph>
                  이것은 사용자 프로필 카드입니다. MUI의 다양한 컴포넌트들을 조합하여 만들었습니다.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="contained" size="small">
                    편집
                  </Button>
                  <Button variant="outlined" size="small">
                    보기
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card sx={{ flex: 1, minWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  액션 버튼들
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button variant="contained" fullWidth>
                    기본 버튼
                  </Button>
                  <Button variant="outlined" fullWidth>
                    아웃라인 버튼
                  </Button>
                  <Button variant="text" fullWidth>
                    텍스트 버튼
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>다이얼로그 제목</DialogTitle>
        <DialogContent>
          <Typography>
            이것은 MUI 다이얼로그입니다. 다양한 내용을 표시할 수 있습니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>취소</Button>
          <Button onClick={() => setDialogOpen(false)} variant="contained">
            확인
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          성공적으로 처리되었습니다!
        </Alert>
      </Snackbar>

      {/* Speed Dial */}
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        open={speedDialOpen}
        onOpen={() => setSpeedDialOpen(true)}
        onClose={() => setSpeedDialOpen(false)}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => setSpeedDialOpen(false)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default MUIExample; 