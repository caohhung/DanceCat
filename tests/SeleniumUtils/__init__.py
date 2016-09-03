from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import selenium.common.exceptions as selenium_exceptions

element_timeout = 2
def wait_for_element_visible(browser, BY, element, timeout=element_timeout):
    try:
        return WebDriverWait(browser, timeout).until(
            EC.presence_of_element_located((BY, element))
        )
    except selenium_exceptions.TimeoutException as e:
        print e
