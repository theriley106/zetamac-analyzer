import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('scores.csv', header=None, names=['score', 'timestamp'])
data['timestamp'] = pd.to_datetime(data['timestamp'])
print(data)
data.plot(x='timestamp', y='score')
plt.show()

