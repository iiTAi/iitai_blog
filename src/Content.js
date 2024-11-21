import { Grid2 } from '@mui/material'
import './Content.css'

function Content() {
    return (
        <div className='content'>
            <Grid2 container justifyContent={'center'} alignItems={'center'} sx={{paddingX: '8.0%'}}>
                <Grid2 lg={8} sm={8} spacing={10}>
                    {/* <p style={{ textAlign: 'center' }}> */}
                    <p>
                        ようこそ、iiTAiの秘密基地へ。<br/>
                        ここはわたしの心底どうでもいいことを書いていくブログです。<br/><br/>
                        Reactの勉強がてら作っているサイトなので、クオリティの低さはお許しを。
                    </p>
                </Grid2>
            </Grid2>
            <Grid2 container direction={'row'} spacing={2}>
            <Grid2 size={6}>
                    <h2 style={{ textAlign: 'center' }}>
                        Markdown
                    </h2>
                </Grid2>
                <Grid2 size={6}>
                    <h2 style={{ textAlign: 'center' }}>
                        Others
                    </h2>
                </Grid2>
                <Grid2
                size={6}
                sx={{
                    backgroundColor: '#ffffff20',
                    padding: '1em',
                    borderRadius: '0.5em',
                }}
                >

                </Grid2>
                <Grid2
                size={6}
                sx={{
                    backgroundColor: '#ffffff20',
                    padding: '1em',
                    borderRadius: '0.5em',
                }}
                >
                    
                </Grid2>
            </Grid2>
        </div>
    )
}

export default Content