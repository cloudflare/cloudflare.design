/** @jsx jsx */
import jsx from "./jsx";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import data from './data'
import { ConfigProvider } from "./useConfig";
import NewConfigNotification from "./NewConfigNotification";
import SiteTitle from './components/SiteTitle'
import IconLink from './components/IconLink'
import Text from './components/Text'
import Card from './components/Card'

// This is the current config from the worker
// and just maps a key of our choosing to a value from our theme file
window.__CONFIG__ = {
  colorPrimary: "white",
  colorSecondary: "gray.0"
};

const initialConfig = window.__CONFIG__;
delete window.__CONFIG__;

function App() {
  return (
    <ConfigProvider initialConfig={initialConfig}>
      {config => (
        <ThemeProvider theme={{ ...theme, c: { ...config } }}>
      <div  sx={{ 
        fontFamily: 'system-ui, sans-serif',
        // We can then assign those values justt like we would a normal theme value and it gets picked up by theme-ui and converted into a value
        color: "c.colorPrimary",
        bg: "c.colorSecondary"
      }}>
          <header
          >
            <NewConfigNotification />
            <SiteTitle text={data.title} />
        </header>
        <section>
          
        </section>
        <section sx={{ pb: [5,6], px: [4, 0, 0] }}>
          <h3 sx={{
            fontSize: [3,5,6], 
            textAlign: 'center',
            mb: 5
          }}>
            Color
          </h3>
          <div sx={{mx: 'auto', maxWidth: '64em' }}>
            
          <div sx={{display: 'flex',flexWrap: ['wrap', 'nowrap'],  mx: -3}}>
            <div sx={{px: 3, width: ['100%', '50%'], mb: 4, }}>
              <Card 
                title="Color"
                text="Build and preview accessible color palettes"
                image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/palette-docs-2.png"
              />
            </div>
            <div sx={{ px: 3, width: ['100%', '50%'], mb: 4 }}>
              <Card 
                title="Thinking about color"
                text="Building accessible color systems for flexible ui theming."
                image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/new-scales.png"
              />
            </div>
            </div>
          </div>
        </section>
        <section>
          <h3 sx={{
            fontSize: [3,5,6], 
            textAlign: 'center',
            mb: 5
          }}>
            Figma Plugins
          </h3>
          <Text>
            As we've been making the transition to Figma, we've been building
            some plugins to help us with common workflows.
          </Text>
        <div sx={{mt: 5, maxWidth: '64em', mx: 'auto'}}>
          <div sx={{display: 'flex', mx: -3}}>
            <div sx={{px: 3}}>
              <Card 
                href="https://www.figma.com/c/plugin/733343906244951586/Color-Blind"
                title="Color Blind"
                text="Preview your designs in 8 different types of color vision deficiency."
                image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/color-blind.png"
                height={192}
              />
            </div>
            <div sx={{px: 3}}>

            <Card 
              href="https://www.figma.com/c/plugin/733062974250826253/Translate"
              title="Translate"
              text="Test your UI against different languages to see what may break."
              image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/translate.png"
              height={192}
            />
        </div>
            <div sx={{px: 3}}>
            <Card 
              href="https://www.figma.com/c/plugin/731451122947612104/Charts"
              title="Charts"
              text="Preview your designs in 8 different types of color vision deficiency."
              image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/charts.png"
              height={192}
            />
        </div>
        </div>
           <article sx={{ mt: 5,}}>
            <a href='https://www.figma.com/blog/behind-the-plugins-sam-mason-de-caires-cloudflare/' sx={{color: 'inherit', textDecoration: 'none'}}>
           
              <span sx={{ display: 'block', lineHeight: 1.5, maxWidth: '34em', fontSize: [3,4,4], mx: 'auto', mb: 3 }}>
        "I find the idea of a design tool with an API to be an interesting one. Things that are often tedious and done by hand can easily be automated if we have access to the underlying code of the tool, therefore giving designers more time to work on the meaningful parts of their process, like designing."
        </span>
        <div sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src='https://cloudflare-assets.s3.us-east-1.amazonaws.com/sam-figma.jpg' sx={{ height: 64, width: 64, borderRadius: 9999, mr: 3 }} />
          <div>
            <span sx={{display: 'block', mb: 1, fontWeight: 800 }}>Sam Mason</span>
            <span>UX Engineer</span>
          </div>
        </div>
            </a>
          </article>
          </div>
        </section>
        <section sx={{ py: [5,6] }}>
          <h3 sx={{
            fontSize: [3,5,6], 
            textAlign: 'center',
            mb: 5
          }}>
            Locations
          </h3>
          <div sx={{mx: 'auto', maxWidth: '64em' }}>
           <div sx={{display: 'flex', mx: -3}}>
             {data.locations.map((location, index) => (
               <article sx={{width: '25%', px: 3}}>
                  <div sx={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url('+location.image+')',
                    backgroundPosition: 'bottom center',
                    px: 4,
                    pt: 7,
                    pb: 6
                  }}>
                   </div>
                  <h4>{location.city}</h4>
               </article>
              ))}
          </div>
          <div sx={{textAlign: 'center'}}>
            <h4 sx={{ fontWeight: 700, fontSize: [4,5,6], mt: 6 }}>
              Want to come work with us? We'd love to hear from you. 
            </h4>
            <a 
              sx={{
                display: 'inline-block',
                borderRadius: '7px', 
                border: '1px solid',
                color: 'inherit',
                fontWeight: 800,
                textDecoration: 'none',
                px: 4, 
                py: 3
            }} href='https://cloudflare.com/careers/departments/design'>We're Hiring</a>
          </div>
        </div>
        </section>
        <section>
          <IconLink />
        </section>
        <footer sx={{p: 2, borderTop: '1px solid'}}>
          <small sx={{ fontSize: 0 }}>{data.copyright}</small>
        </footer>
      </div>

        </ThemeProvider>
      )}
    </ConfigProvider>
  );
}

export default App;
