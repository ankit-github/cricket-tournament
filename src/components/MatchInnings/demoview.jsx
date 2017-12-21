<Box>
        <Box>
          <input type="text" />
        </Box>
        <Box>
          <Grid columns={['small', 'flex', 'small']}>
            <Box> Batsman1 </Box>
            <Box> 1 ,1, 1, 1 </Box>
            <Box> 4 </Box>
            <Box> Batsman2 </Box>
            <Box> 1 ,1, 1, 1 </Box>
            <Box> 4 </Box>
          </Grid>
          <Grid columns={['small', 'flex', 'small']}>
            <Box> Bowler </Box>
            <Box> 1 ,0, 0, 1 </Box>
            <Box> 2 </Box>
          </Grid>
        </Box>
        <Box> First Innings </Box>
        <Grid rows={['flex', 'flex']}>
          <Box>
            <Box>{this.props.inningData.batting.teamName}</Box>
            {this.props.inningData.batting.players.map((player) => <Box>{player}</Box>)}
          </Box>
          <Box>
            <Box>{this.props.inningData.bowling.teamName}</Box>
            {this.props.inningData.bowling.players.map((player) => <Box>{player}</Box>)}
          </Box>
        </Grid>
      </Box>