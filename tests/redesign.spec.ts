import { test, expect } from '@playwright/test';

function contrast(a: string, b: string) {
  const luminance = (c: string) => c.match(/[\d.]+/g)!.slice(0,3).map(Number).map(v => {v/=255; return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
  const values=[luminance(a),luminance(b)].sort((x,y)=>y-x);
  return (values[0]+.05)/(values[1]+.05);
}

test('primary actions retain readable contrast on every route and in the pilot dialog', async ({ page }) => {
  for(const path of ['/', '/tag', '/aegis-os', '/infrastructure-intelligence', '/ai-trust-fabric', '/services', '/company', '/contact']) {
    await page.goto(path);
    const controls=page.locator('.control-primary:visible');
    for(const control of await controls.all()) {
      const colors=await control.evaluate(e=>({text:getComputedStyle(e).color,background:getComputedStyle(e).backgroundColor}));
      expect(contrast(colors.text,colors.background),`${path}: ${await control.innerText()}`).toBeGreaterThanOrEqual(4.5);
    }
    await page.locator('nav').getByRole('button',{name:'Request a Pilot',exact:true}).click();
    const submit=page.getByRole('dialog').getByRole('button',{name:'Review demo request'});
    const colors=await submit.evaluate(e=>({text:getComputedStyle(e).color,background:getComputedStyle(e).backgroundColor}));
    expect(contrast(colors.text,colors.background)).toBeGreaterThanOrEqual(4.5);
    await page.keyboard.press('Escape');
  }
});

test('skip link, hardware layers, and feature disclosures work with a keyboard',async({page})=>{
  await page.goto('/tag');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link',{name:'Skip to content'})).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const tpm=page.getByRole('group',{name:'Hardware layers'}).getByRole('button',{name:'TPM 2.0',exact:true});
  await tpm.focus();await page.keyboard.press('Enter');await expect(tpm).toHaveAttribute('aria-pressed','true');
  const feature=page.locator('[role="button"][aria-expanded]').first();
  await feature.focus();await page.keyboard.press('Enter');await expect(feature).toHaveAttribute('aria-expanded','true');
  await page.keyboard.press('Space');await expect(feature).toHaveAttribute('aria-expanded','false');
  const scenario=page.locator('[role="button"][aria-pressed]').nth(1);
  await scenario.focus();await page.keyboard.press('Enter');await expect(scenario).toHaveAttribute('aria-pressed','true');
});

test('small mobile layouts keep headings, actions and diagrams within the viewport',async({page})=>{
  await page.setViewportSize({width:320,height:800});
  for(const path of ['/','/tag','/aegis-os','/infrastructure-intelligence','/ai-trust-fabric']){
    await page.goto(path);
    for(const element of await page.locator('main h1, .system-diagram, .portfolio-row').all()){
      const box=await element.boundingBox();expect(box!.x).toBeGreaterThanOrEqual(0);expect(box!.x+box!.width).toBeLessThanOrEqual(321);
      expect(await element.evaluate(e=>e.scrollWidth<=e.clientWidth+1)).toBe(true);
    }
  }
});
