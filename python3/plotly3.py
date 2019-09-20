import plotly.graph_objects as gr 
fig = gr.Figure(data=gr.Bar(y=[461,192], x=['GW Missing','Invalid GW']))
fig.update_layout(title=gr.layout.Title(
    text="Gateway Language Data Defects",xref="paper",x=0
    ),
    yaxis=gr.layout.YAxis(
        title=gr.layout.yaxis.Title(
            text="Number of languages with defects"
        )
    ),
)
fig.write_html('gw_figure.html')