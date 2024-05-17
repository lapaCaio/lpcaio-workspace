// @ts-check
import { test, expect } from '@playwright/test';
import { after } from 'node:test';

async function preencheCamposEmail(page) {
    await page.fill('input[name="user_name"]', 'Caio Lapa');
    await page.fill('input[name="user_email"]', 'caiolapa@example.com');
    await page.fill('textarea[name="message"]', 'Olá, este é um teste de mensagem.');
}

test.beforeEach( async ({ page }) => {
    await page.goto('https://cartao-de-visitas-1f916.web.app/home');

    await expect(page).toHaveTitle(/Cartão de Visitas/);
    await expect(page.getByRole('heading', { name: 'Catterina Vittorazzi Salvador'})).toBeVisible();
});

// describe separa em grupos
test.describe('Testes Email', () => {

    test.beforeEach( async ({ page }) => {
        await page.getByRole('link', { name: '' }).click();
        // o que é esperado que o 
        await expect(page.getByRole('link', { name: '' })).not.toBeVisible();

    });

    test('TC001 e TC002 - verifica os campos de texto estão vazios e são editaveis', async ({ page }) => {

        for(const element of ['input[name="user_name"]', 'input[name="user_email"]', 'textarea[name="message"]']){
            expect(page.locator(element)).toBeEmpty();
            expect(page.locator(element)).toBeEditable();
        }
    });

    test('TC003 - verifica se os botões são clicláveis', async ({ page }) => {
        preencheCamposEmail(page);

        for(const element of ['Enviar', 'Voltar']){
            expect(page.getByRole('button', { name: element })).toBeVisible();
            await page.getByRole('button', { name: element }).click();
        }
    });
});

test.describe('Testes WhatsApp', () => {
    test('TC004 - Verificação de Redirecionamento', async ({ page }) => {
        const wppButton = page.getByRole('link', { name: '' });
        await expect(wppButton).toBeVisible();
    
        await expect(wppButton).toHaveAttribute('href', 'https://wa.me/5528999596505?text=Olá!');
    
        await wppButton.click();
        const newPage = await page.context().waitForEvent('page');

    });
});

test.describe('Testes Instagram', () => {
    test('TC005 - Verificação de Redirecionamento', async ({ page }) => {
        const instagramButton = page.getByRole('link', { name: '' });
        await expect(instagramButton).toBeVisible();
    
        await expect(instagramButton).toHaveAttribute('href', 'https://www.instagram.com/catterinasalvador/');
    
        await instagramButton.click();
        const newPage = await page.context().waitForEvent('page');
    
    });
});

test.describe('Testes Linkedin', () => {
    test('TC006 - Verificação de Redirecionamento', async ({ page }) => {
        // const instaButton = page.locator('a[href="https://wa.me/5528999596505?text=Olá!"]')
        const linkedinButton = page.getByRole('link', { name: '' })
        await expect(linkedinButton).toBeVisible();
    
        await expect(linkedinButton).toHaveAttribute('href', 'https://www.linkedin.com/in/catterina-salvador-2708035b/')
    
        await linkedinButton.click();
        const newPage = await page.context().waitForEvent('page');
    
    });
});

test.describe('Testes GitHub', () => {
    test('TC007 - Verificação de Redirecionamento', async ({ page }) => {
        // const instaButton = page.locator('a[href="https://wa.me/5528999596505?text=Olá!"]')
        const githubButton = page.getByRole('link', { name: '' });
        await expect(githubButton).toBeVisible();
    
        await expect(githubButton).toHaveAttribute('href', 'https://www.github.com/catterinavs');
    
        await githubButton.click();
        const newPage = await page.context().waitForEvent('page');
    
    });
});


test.describe('Testes Surprise', () => {
    test.beforeEach( async ({ page }) => {
        await page.getByRole('link', { name: '' }).click();
        await expect(page.getByRole('link', { name: '' })).not.toBeVisible();
    });

    test("TC008 - verificação se a foto aleatória aparece", async ({ page }) => {
        await page.getByRole('img', { name: 'foto aleatória' }).isVisible();
    });

    // test("TC009 - verificação se a frase aleatória aprarece", async ({ page }) => {
    //     const elementos = page.getByText(/.*/);
    //     const textos = [];

    //     for (const elemento of elementos){
    //         const texto = await elemento.innerText();
    //     textos.push(texto);
    //     }
    // });
});