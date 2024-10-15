import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Box, Button, Link, Stack, Typography } from "@mui/material"
import { ArrowBackIosNewRounded, OpenInNew } from "@mui/icons-material";
import { getToolById } from "../../api/tools-servicesApi";
import { ToolServiceModel } from "../../data-models/ToolOrService/ToolOrServiceModel";

const ResourceDetailsPage = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();

  const [itemDetails, setItemDetails] = useState<ToolServiceModel | null>(null);

  const fetchToolById = (persistentId: string) => getToolById(persistentId)
    .then(({ data }) => {
      if (data) {
        setItemDetails(data);
      } else {
        console.error("Error");
      }
    })
    .catch(() => alert("Error fetching items"));

  useEffect(() => {
    if (toolId) fetchToolById(toolId);
  }, [toolId]);

  const handleRedirectToItems = () => navigate('/resources');

  if (!itemDetails) { }

  return (
    <Box py={3} width='60%' sx={{ margin: `0 auto` }}>
      {
        itemDetails ? (
          <Stack gap={3}>
            <Stack>
              <Typography variant='h4' color="#164a78">{itemDetails?.label}</Typography>
            </Stack>
            <Stack>
              <Typography textAlign='left'>{itemDetails?.description}</Typography>
            </Stack>
            <Stack>
              <Link href={itemDetails.accessibleAt} target="_blank" underline="none" alignContent="center" display="flex">
                Access the source <OpenInNew fontSize="small" />
              </Link>
            </Stack>
          </Stack>
        ) :
          <Typography>Item not found</Typography>
      }
      <Button
        variant="text"
        startIcon={<ArrowBackIosNewRounded />}
        disableRipple
        sx={{
          marginTop: '20px',
          '&.MuiButton-root:hover': {
            backgroundColor: 'unset',
          }
        }}
        onClick={handleRedirectToItems}
      >
        Back to items
      </Button>
    </Box>

  )
}

export default ResourceDetailsPage;
