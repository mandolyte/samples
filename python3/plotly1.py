import plotly.graph_objects as gr 
fig = gr.Figure(data=gr.Bar(y=[2,3,1]))
fig.write_html('first_figure.html')