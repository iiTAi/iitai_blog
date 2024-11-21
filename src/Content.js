import { Grid2 } from '@mui/material'
import './Content.css'

function Content() {
    return (
        <div className='content'>
            {/* // 中央ぞろえのgrid2 */}
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
        </div>
    )
}

export default Content