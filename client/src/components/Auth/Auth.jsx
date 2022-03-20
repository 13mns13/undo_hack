import React from 'react'

import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';



function MyFormHelperText() {
    const { focused } = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      if (focused) {
        return 'This field is being focused';
      }
  
      return 'Helper text';
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
  }


const Auth = () => {
    return (
        <section className={classes.Start}>
            <div className='container'>
                <form>
                    <div class="mb-3">
                        <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: '25ch' }}>
                                <OutlinedInput placeholder="Заполните поле" />
                                <MyFormHelperText />
                            </FormControl>
                        </Box>
                        <div id="emailHelp" class="form-text">Мы никогда не поделимся вашей электронной почтой с кем-либо еще.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Start