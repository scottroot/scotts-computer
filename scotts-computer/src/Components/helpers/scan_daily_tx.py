import requests
from bs4 import BeautifulSoup as bs4
import http.cookiejar
import urllib.request, urllib.parse, urllib.error
import pandas as pd
import datetime

url_list = {"Ethereum":"https://etherscan.io/chart/tx?output=csv",
            "BSC":"https://bscscan.com/chart/tx?output=csv",
            "Polygon":"https://polygonscan.com/chart/tx?output=csv",
            "Fantom":"https://ftmscan.com/chart/tx?output=csv",
            "Heco":"https://hecoinfo.com/chart/tx?output=csv",
            "Hoo":"https://hooscan.com/chart/tx?output=csv",
            "Optimism":"https://optimistic.etherscan.io/chart/tx?output=csv",
            "Beacon":"https://beaconscan.com/chart/tx?output=csv",
            "Avalanche":"https://snowtrace.com/chart/tx?output=csv",
            "Moon":"https://moonscan.io/chart/tx?output=csv",
            "Moonriver":"https://moonriver.moonscan.io/chart/tx?output=csv",
            "Crono":"https://cronoscan.com/chart/tx?output=csv"
            }


def get_data(url="", name="", headers="", cookiefile="", params=""):
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36"}
    filename = "cookies.txt"
    try:
        this_url = url_list[name]
    except:
        this_url = url
    request = urllib.request.Request(this_url, None, headers, params)
    cookies = http.cookiejar.MozillaCookieJar(filename, None, None)
    cookies.load()
    cookie_handler = urllib.request.HTTPCookieProcessor(cookies)
    redirect_handler = urllib.request.HTTPRedirectHandler()
    opener = urllib.request.build_opener(redirect_handler,cookie_handler)
    response = opener.open(request)
    soup = bs4(response, "html.parser")
    soup = soup.text.replace('"','').replace("\r","")
    soup_lines = [i for i in soup.split("\n") if i != '']
    colnames = ["Date(UTC)","UnixTimeStamp","Value"]
    df = pd.DataFrame(columns=colnames)

    for line in soup_lines:
        line = line.split(",")
        row = len(df)
        df.loc[row, "Date(UTC)"] = line[0]
        df.loc[row, "UnixTimeStamp"] = line[1]
        df.loc[row, "Value"] = line[2]
    df = df.iloc[1:]
    df.dropna()
    df.drop('UnixTimeStamp', inplace=True, axis=1)
    df.rename(columns = {"Value":name}, inplace=True)
    df.rename(columns = {"Date(UTC)":"DateUTC"}, inplace=True)
    last_week = datetime.datetime.now() - datetime.timedelta(days=8)

    df['DateUTC'] = pd.to_datetime(df['DateUTC'])
    df["DateUTC"] = pd.DatetimeIndex(df['DateUTC'])
    df.set_index('DateUTC', inplace=True, drop=True)

    df = df[df.index >= last_week]    
    return df


def get_all_evm():
    df = get_data(name="Ethereum")
    for names in list(url_list.keys())[1:]:
	    try:
	        data = get_data(name=names)
	        df = df.merge(data, left_index=True, right_index=True, how='left')
	    except:
	        pass
    return df


df = get_all_evm()
print(df)
df.to_csv("daily_tx.csv")