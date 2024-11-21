import { Grid2 } from '@mui/material'

function Content() {
    return (
        <Grid2 container>
            <Grid2 sm={2}/>
            <Grid2 lg={8} sm={8} spacing={10} sx={{paddingX: '2.0%'}}>
                (コンテンツをここに表示)
            </Grid2>
        </Grid2>
    )
}

export default Content