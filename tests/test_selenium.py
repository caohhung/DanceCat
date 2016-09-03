from selenium import webdriver
from selenium.webdriver.common.by import By
import SeleniumUtils
import time


browser = webdriver.Firefox()
browser.get('http://127.0.0.1:8443')
LoginPage_LoginButton = '/html/body/div/div/nav/ul/li[1]/a'
print browser.capabilities['version']

LoginButton = SeleniumUtils.wait_for_element_visible(
    browser=browser,
    BY=By.XPATH,
    element=LoginPage_LoginButton,
)

print LoginButton
LoginButton.click()
time.sleep(5)
browser.quit()